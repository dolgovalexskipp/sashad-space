import { ExternalLink } from 'lucide-react';

const items = [
  {
    title: 'Дейтинг с разработчиками: как мы за 2 месяца выпустили MVP приложения',
    source: 'vc.ru',
    year: '2023',
    url: 'https://vc.ru/tribuna/550275-deiting-s-razrabotchikami-kak-my-za-2-mesyaca-vypustili-mvp-prilozheniya-dlya-poiska-aitishnikov-za-rubezhom',
    logoAlt: 'Logo: vc.ru'
  },
  {
    title: 'Как проверить идею: пошаговая инструкция',
    source: 'RB.ru (Rusbase)',
    year: '2023',
    url: 'https://rb.ru/columns/idea-check-cv/',
    logoAlt: 'Logo: Rusbase'
  },
  {
    title: 'Skipp привлек инвестиции от основателей Delivery Club и Skyeng',
    source: 'Forbes',
    year: '2021',
    url: 'https://www.forbes.ru/svoi-biznes/445465-osnovatel-skyeng-i-eks-gendirektor-delivery-club-vlozilis-v-hr-startap',
    logoAlt: 'Logo: Forbes'
  },
  {
    title: 'Skyeng и «Просвещение» договорились о сотрудничестве',
    source: 'Известия',
    year: '2019',
    url: 'https://iz.ru/867469/2019-04-12/prosveshchenie-i-skyeng-dogovorilis-o-sotrudnichestve',
    logoAlt: 'Logo: Известия'
  }
];

const Publications = () => {
  return (
    <section id="publications" className="spacing-section bg-surface">
      <div className="container-main">
        <h2 className="text-heading-2 text-foreground mb-12">Медиа и публикации</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card p-6 transition-all duration-200 ease-out hover:scale-[1.01] group"
              aria-label={`${item.source}: ${item.title}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Monochrome logo placeholder */}
                  <div className="h-8 w-8 rounded bg-background border border-border flex items-center justify-center" aria-label={item.logoAlt} />
                  <span className="text-sm text-muted-foreground font-medium">{item.source}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{item.year}</span>
                  <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h3 className="text-heading-3 text-foreground group-hover:text-accent-link transition-colors">{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
