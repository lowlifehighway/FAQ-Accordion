const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const accordionIcon = item.querySelector('.accordion-item img');
  const content = item.querySelector('.accordion-item div');
  const accordionHeader = item.querySelector('.accordion-item h3');
  const accordion = function () {
    const isHidden = content.classList.contains('hidden');
    if (!isHidden) {
      // If the clicked item is already open, close it
      content.style.maxHeight = '0';
      setTimeout(() => {
        content.classList.add('hidden');
      }, 300);

      accordionIcon.src = '/assets/images/icon-plus.svg';
    } else {
      // Close all other open items
      accordionItems.forEach((otherItem) => {
        const otherContent = otherItem.querySelector('.accordion-item div');
        if (!otherContent.classList.contains('hidden')) {
          otherContent.style.maxHeight = '0';
          setTimeout(() => {
            otherContent.classList.add('hidden');
          }, 300);

          // Reset text color when closed
          otherItem.style.borderTop = '';
          otherItem.querySelector('.accordion-item img').src =
            '/assets/images/icon-plus.svg';
        }
      });

      // Open the clicked item
      content.classList.remove('hidden');
      content.style.maxHeight = content.scrollHeight + 'px'; // Optional, to differentiate active items
      accordionIcon.src = '/assets/images/icon-minus.svg';
    }
  };
  // Add event listener to the whole header for better UX
  accordionHeader.addEventListener('click', accordion);
  accordionIcon.addEventListener('click', accordion);
});
