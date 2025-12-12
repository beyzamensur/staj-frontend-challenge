interface ButtonProps {
    text: string;
    type?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
    isSubmit?: boolean;
}


export const createButton = ({ text, type = 'primary', onClick, isSubmit = false }: ButtonProps): HTMLButtonElement => {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = `Button Button--${type}`;
    button.onclick = onClick;
    
    if (isSubmit) {
        button.type = 'submit';
    } else {
        button.type = 'button';
    }

    return button;
};