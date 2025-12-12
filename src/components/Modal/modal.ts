interface ModalProps {
    title: string;
    children: HTMLElement[]; 
    onClose: () => void;
}


export const createModal = ({ title, children, onClose }: ModalProps) => {
    const modal = document.createElement('div');
    modal.className = 'Modal';

    const backdrop = document.createElement('div');
    backdrop.className = 'Modal-backdrop';

    const content = document.createElement('div');
    content.className = 'Modal-content';

    const header = document.createElement('div');
    header.className = 'Modal-header';
    header.innerHTML = `<h3>${title}</h3>`;

    const closeButton = document.createElement('button');
    closeButton.className = 'Modal-close';
    closeButton.innerHTML = '&times;'; 

    const body = document.createElement('div');
    body.className = 'Modal-body';
    
    
    children.forEach(child => body.appendChild(child));

    content.append(header, closeButton, body);
    modal.append(backdrop, content);

    const close = () => {
        modal.classList.remove('Modal--open');
        setTimeout(() => {
            modal.remove();
            onClose(); 
        }, 300); 
    };
    
    const open = () => {
        modal.classList.add('Modal--open');
    };

    
    closeButton.addEventListener('click', close);
    backdrop.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            close();
        }
    });

    
    setTimeout(open, 10); 

    return {
        modal, 
        open,
        close,
    };
};