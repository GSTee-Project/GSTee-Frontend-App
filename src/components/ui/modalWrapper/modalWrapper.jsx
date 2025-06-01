import styles from './modalWrapper.module.css'
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { IoClose } from "react-icons/io5";

const ModalWrapper = ({ open, onClose, width = '550px', children }) => {
    return (
        <Dialog open={open} onClose={onClose} scroll="body" fullWidth sx={{ '& .MuiDialog-paper': { width: width, }, }} className={styles.modal}>
            <DialogTitle>
                <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
                    <IoClose className={styles.closeIcon} size={20} />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default ModalWrapper