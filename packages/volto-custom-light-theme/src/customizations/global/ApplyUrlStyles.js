import { useEffect } from 'react';

const ApplyUrlStyles = () => {
  useEffect(() => {
    // Função para transformar URLs em texto em links clicáveis
    const applyStylesToUrls = () => {
      document.querySelectorAll('p, span, div').forEach((element) => {
        // Itera sobre os nós de texto dentro do elemento
        Array.from(element.childNodes).forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const regex = /\b((http|https):\/\/|www\.)[^\s/$.?#].[^\s]*/gi; // Detecta URLs válidos
            const matches = node.textContent.match(regex);

            if (matches) {
              // Cria um container temporário para substituir apenas o texto correspondente
              const tempContainer = document.createElement('span');
              tempContainer.innerHTML = node.textContent.replace(
                regex,
                (url) =>
                  `<a href="${url.startsWith('http') ? url : `http://${url}`}" target="_blank" rel="noopener noreferrer" class="link-padrao">${url}</a>`,
              );

              // Substitui o nó de texto pelo conteúdo processado
              node.replaceWith(...tempContainer.childNodes);
            }
          }
        });
      });
    };

    // Aplica os estilos após o carregamento inicial
    applyStylesToUrls();

    // Observa mudanças no DOM para aplicar os estilos dinamicamente
    const observer = new MutationObserver(() => {
      applyStylesToUrls();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup do observer
    return () => observer.disconnect();
  }, []);

  return null; // Este componente não renderiza nada
};

export default ApplyUrlStyles;
