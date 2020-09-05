import Character from '../classes/character';
import Zombie from '../classes/zombie';

test('should sum', () => {
  const c = new Character('Лучник', 'Bowerman');
  const z = new Zombie('Зомби', 'Zombie');

  const c1 = {
    health: 100,
    level: 1,
    name: 'Лучник',
    type: 'Bowerman',
  };

  const z1 = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Зомби',
    type: 'Zombie',
  };

  expect(c).toEqual(c1);
  expect(z).toEqual(z1);
});
