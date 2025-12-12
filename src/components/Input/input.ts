interface InputProps {
    id: string;
    label: string;
    type: 'text' | 'email' | 'password';
    placeholder?: string;
    required?: boolean;
}


export const createInput = ({ id, label, type, placeholder = '', required = false }: InputProps): HTMLDivElement => {
    const container = document.createElement('div');
    container.className = 'Input-group';

    const labelElement = document.createElement('label');
    labelElement.htmlFor = id;
    labelElement.textContent = label;

    const inputElement = document.createElement('input');
    inputElement.id = id;
    inputElement.type = type;
    inputElement.placeholder = placeholder;
    inputElement.required = required;
    inputElement.className = 'Input';

    
    inputElement.addEventListener('blur', () => {
        if (required && !inputElement.value.trim()) {
            inputElement.classList.add('Input--invalid');
        } else if (type === 'email' && !inputElement.value.includes('@')) {
             inputElement.classList.add('Input--invalid');
        } else {
            inputElement.classList.remove('Input--invalid');
        }
    });

    container.append(labelElement, inputElement);
    return container;
};