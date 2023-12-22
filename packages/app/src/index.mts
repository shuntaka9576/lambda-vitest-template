export const handler = () => {
  const calc = add(10, 20);

  console.log(calc);
};

const add = (a: number, b: number) => {
  return a + b;
};

if (import.meta.vitest) {
  describe('addのテスト', () => {
    describe('1+1の場合', () => {
      test('Return 2', () => {
        const got = add(1, 1);

        expect(got).toEqual(2);
      });
    });
  });
}
