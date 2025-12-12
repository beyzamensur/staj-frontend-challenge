interface AccordionItem {
    question: string;
    answer: string;
}

export const createAccordion = (data: AccordionItem[]): HTMLDivElement => {
    const container = document.createElement('div');
    container.className = 'Accordion-container';

    data.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'Accordion-item';

        const button = document.createElement('button');
        button.className = 'Accordion-button';
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', `content-${index}`);
        button.textContent = item.question;
        button.insertAdjacentHTML('beforeend', '<span class="Accordion-icon">+</span>'); 

        const content = document.createElement('div');
        content.id = `content-${index}`;
        content.className = 'Accordion-content';
        content.setAttribute('aria-hidden', 'true');
        content.innerHTML = `<p>${item.answer}</p>`;

        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!isExpanded));
            content.setAttribute('aria-hidden', String(isExpanded));
        });

        itemDiv.append(button, content);
        container.appendChild(itemDiv);
    });

    return container;
};