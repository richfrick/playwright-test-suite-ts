import { ArticleRequestBody } from '../../types/request-bodies/articles/articles';
import { expect } from '../../utils/custom-expect';
import { test } from '../../utils/fixtures';
import articleRequestPayload from '../../request-objects/POST-article.json';
import { generateRandomArticleBody } from '../../utils/datd-generator';

test('Validate GET articles schema', async ({ api }) => {
  const response = await api.path(`/api/articles`).get(200);

  await expect(response).shouldMatchSchema('articles', 'GET_articles');
});

test('Validate POST articles schema', async ({ api }) => {
  const articleRequestBody = await generateRandomArticleBody();
  const response = await api
    .path('/api/articles')
    .body(articleRequestBody)
    .post(201);

  await expect(response).shouldMatchSchema('articles', 'POST_articles');
  await api.path(`/api/articles/${response.article.article_id}`).delete(204);
});

test('Validate get single  Article schema', async ({ api }) => {
  const articleRequestBody = await generateRandomArticleBody();
  const {
    article: { article_id },
  } = await api.path('/api/articles').body(articleRequestBody).post(201);

  const getNewArticle = await api.path(`/api/articles/${article_id}`).get(200);
  await expect(getNewArticle).shouldMatchSchema('articles', 'GET_article');
  await api.path(`/api/articles/${article_id}`).delete(204);
});
