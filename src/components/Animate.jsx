import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
function Animate({ children, ...props }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      {...props}
    >
      {children}
    </motion.main>
  );
}
export default Animate;
