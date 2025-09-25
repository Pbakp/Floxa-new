export const scrollToBottom = () => {
  const chatContainer =
    document.querySelector('[data-chat-container]') ||
    document.querySelector('.flex-1.p-6.space-y-4.bg-transparent') ||
    document.querySelector('main') ||
    document.body;

  if (chatContainer) {
    chatContainer.scrollTo({
      top: chatContainer.scrollHeight,
      behavior: 'smooth',
    });
  }
};
