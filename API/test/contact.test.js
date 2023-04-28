import Repository from '../Repository'

test('Adding contact Elvis Ohin',() => {
    expect(Repository.createContact("Elvis", "Ohin", 1)).toBe(true);
  });