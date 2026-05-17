import { motion, AnimatePresence } from 'framer-motion';

type LoadingScreenProps = {
  isLoading: boolean;
};

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
        >
          <motion.div
            className="loader-core"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          >
            <span />
            <span />
            <span />
          </motion.div>
          <motion.div
            className="loader-copy"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p>Initializing AI portfolio</p>
            <strong>Ramadan Mohamed Hassan</strong>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
