import classes from './../classes';

describe('classes', () => {
  it('one className', ()=> {
    let result = classes('a');
    expect(result).toEqual('a');
  });

  it('two className', ()=> {
    let result = classes('a', 'b');
    expect(result).toEqual('a b');
  });

  it('more className', ()=> {
    let result = classes('a', 'b c', 'd');
    expect(result).toEqual('a b c d');
  });

  it('undefined className', ()=> {
    let result = classes('a', undefined);
    expect(result).toEqual('a');
  });
});
