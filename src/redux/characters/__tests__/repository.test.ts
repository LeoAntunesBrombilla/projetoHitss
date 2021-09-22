import * as repository from '../repository';

describe('Characters repository', () => {
  const docGet = jest.fn();
  const collectionGet = jest.fn();
  const collectionSpy = jest.fn();
  const collectionDoc = jest.fn();

  jest.spyOn<any, any>(repository, 'default').mockReturnValue({
    collection: collectionSpy.mockReturnValue({
      doc: collectionDoc.mockReturnValue({
        get: docGet,
      }),
      get: collectionGet,
    }),
  });

  const page = '1';

  test('ao chamar o requestCharacters deve chamar o get da collection', async () => {
    await repository.requestCharacters(page);

    expect(collectionSpy).toHaveBeenCalledWith(`people/?page=${page}`);
    expect(collectionGet).toHaveBeenCalled();
  });
});
