import styles from './modalWrapper.module.css'
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { IoClose } from "react-icons/io5";

const ModalWrapper = ({ open, onClose, width = '550px', children, disableOverlayClose = false, showCloseBtn = true }) => {

    const handleClose = (event, reason) => {
        if (reason === 'backdropClick') return;
        onClose(event, reason);
    };

    return (
        <Dialog open={open} onClose={disableOverlayClose ? handleClose : onClose} scroll="body" fullWidth sx={{ '& .MuiDialog-paper': { width: width, maxWidth: '80%' }, }} className={styles.modal}>
            <DialogTitle>
                {showCloseBtn &&
                    <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
                        <IoClose className={styles.closeIcon} size={20} />
                    </IconButton>
                }
            </DialogTitle>
            <DialogContent style={{padding: '0px'}}>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default ModalWrapper