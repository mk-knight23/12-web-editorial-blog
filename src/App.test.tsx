import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock framer-motion to reduce test complexity
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => {
            const { whileInView, viewport, initial, animate, transition, ...rest } = props;
            return <div {...rest}>{children}</div>;
        },
        article: ({ children, ...props }: any) => {
            const { whileInView, viewport, initial, animate, transition, ...rest } = props;
            return <article {...rest}>{children}</article>;
        },
    },
    useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
    useSpring: () => ({ get: () => 0 }),
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('MK Blog App', () => {
    it('renders without crashing', () => {
        const { container } = render(<App />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('renders navigation with correct links', () => {
        render(<App />);
        expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
        expect(screen.getAllByText(/Articles/i)).toBeTruthy();
        expect(screen.getAllByText(/Newsletter/i)).toBeTruthy();
    });

    it('renders hero section with title', () => {
        render(<App />);
        expect(screen.getByText(/Thought Leadership in Tech/i)).toBeInTheDocument();
        expect(screen.getAllByText(/MODERN/i)).toBeTruthy();
    });

    it('renders blog posts', () => {
        render(<App />);
        expect(screen.getAllByText(/Articles/i)).toBeTruthy();
        expect(screen.getByText(/The Future of Artificial Intelligence/i)).toBeInTheDocument();
        expect(screen.getByText(/Mastering Framer Motion/i)).toBeInTheDocument();
        expect(screen.getByText(/Scaling Next.js Applications/i)).toBeInTheDocument();
    });

    it('renders newsletter section', () => {
        render(<App />);
        expect(screen.getByText(/JOIN THE INNER CIRCLE/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email address for newsletter/i)).toBeInTheDocument();
        expect(screen.getAllByRole('button', { name: /Subscribe to newsletter/i })).toBeTruthy();
    });

    it('has proper ARIA labels for accessibility', () => {
        render(<App />);

        // Check for application role
        expect(screen.getByRole('application', { name: /MK Blog/i })).toBeInTheDocument();

        // Check for main content
        expect(screen.getByRole('main')).toBeInTheDocument();

        // Check for footer
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('renders footer with sections', () => {
        render(<App />);
        expect(screen.getAllByText(/Explore/i)).toBeTruthy();
        expect(screen.getAllByText(/Connect/i)).toBeTruthy();
        expect(screen.getAllByText(/Support/i)).toBeTruthy();
    });
});
