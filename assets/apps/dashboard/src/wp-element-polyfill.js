let id = 0;

// Memoized generateId function
function generateId() {
	return ':' + (id++).toString(36);
}

// Polyfill for useId
function addUseIDPolyfill() {
	if (window.wp.element.useId) {
		return;
	}
	const useId = function useId() {
		const [genID] = window.wp.element.useState(generateId);
		return genID;
	};

	window.wp.element.useId = useId;
	window.React.useId = useId;
}

// Polyfill for useSyncExternalStore
function addUseSyncExternalStorePolyfill() {
	if (window.wp.element.useSyncExternalStore) {
		return;
	}
	const useSyncExternalStore = function useSyncExternalStore(
		subscribe,
		getSnapshot
	) {
		const [state, setState] = window.wp.element.useState(getSnapshot);

		window.wp.element.useEffect(() => {
			// Set initial state
			setState(getSnapshot());

			// Subscribe to changes
			return subscribe(() => {
				setState(getSnapshot());
			});
		}, [subscribe, getSnapshot]);

		return state;
	};

	window.wp.element.useSyncExternalStore = useSyncExternalStore;
	window.React.useSyncExternalStore = useSyncExternalStore;
}

export default function maybeAddPolyFills() {
	if (typeof window.wp !== 'undefined' && window.wp.element) {
		addUseIDPolyfill();
		addUseSyncExternalStorePolyfill();
	}
}
