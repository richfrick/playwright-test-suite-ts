import articleRequestPayload from '../request-objects/POST-article.json';

export async function generateRandomArticleBody() {
  const { faker } = await import('@faker-js/faker');
  const articleRequest = structuredClone(articleRequestPayload);
  articleRequest.author = 'tickle122';
  articleRequest.title = faker.lorem.sentence(4);
  articleRequest.topic = 'football';
  articleRequest.body = faker.lorem.paragraph(8);
  articleRequest.article_img_url = faker.image.url();
  return articleRequest;
}
