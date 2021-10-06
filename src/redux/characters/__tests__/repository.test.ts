import * as repository from '../repository';
import api from '../../../api';

describe('Characters repository', () => {
  const page = '1';

  const getSpy = jest.spyOn(api, 'get');

  test('ao chamar o requestCharacters deve chamar o get da collection', async () => {
    const data = {
      count: 82,
      next: '3',
      previous: '1',
      results: [],
    };

    getSpy.mockResolvedValue({data});
    const dataResponse = await repository.requestCharacters(page);

    expect(getSpy).toHaveBeenCalledWith(`people/?page=${page}`);
    expect(dataResponse).toEqual(data);
  });
});
