jest.mock('@react-native-community/async-storage', () => ({
  setCharacterList: jest.fn(),
  requestCharacater: jest.fn(),
}));
