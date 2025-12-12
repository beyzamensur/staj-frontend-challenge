
interface CardProps {
    title: string;
    content: string;
}


export const createCard = ({ title, content }: CardProps): HTMLDivElement => {
    const card = document.createElement('div');
    card.className = 'Card';

    const titleElement = document.createElement('h3');
    titleElement.className = 'Card-title';
    titleElement.textContent = title;

    const contentElement = document.createElement('div');
    contentElement.className = 'Card-content';
    contentElement.innerHTML = `<p>${content}</p>`; 
    
    card.append(titleElement, contentElement);
    return card;
};