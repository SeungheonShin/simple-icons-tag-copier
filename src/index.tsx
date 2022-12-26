import { createRoot, Root } from 'react-dom/client';
import App from '@/components/App';

const root: Root = createRoot(document.getElementById('root'));
root.render(<App />);
