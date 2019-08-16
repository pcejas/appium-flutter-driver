// tslint:disable:object-literal-sort-keys
import expect from 'expect';
import * as spec from '../../spec.json';
import * as find from './serializer';

describe(`serializer`, () => {
  it(`ancestor`, () => {
    const expected = find.ancestor({
      of: find.bySemanticsLabel(RegExp(`counter_semantic`)),
      matching: find.byType(`Tooltip`),
    });
    expect(expected).toBe(spec.ancestor);
  });
  it(`text`, () => {
    const expected = find.byText(`This is 2nd route`);
    expect(expected).toBe(
      `eyJmaW5kZXJUeXBlIjoiQnlUZXh0IiwidGV4dCI6IlRoaXMgaXMgMm5kIHJvdXRlIn0`,
    );
  });
  it(`pageBack`, () => {
    const expected = find.pageBack();
    expect(expected).toBe(`eyJmaW5kZXJUeXBlIjoiUGFnZUJhY2sifQ`);
  });
  it(`bySemanticsLabel String`, () => {
    const expected = find.bySemanticsLabel(`simple`);
    expect(expected).toBe(
      `eyJmaW5kZXJUeXBlIjoiQnlTZW1hbnRpY3NMYWJlbCIsImlzUmVnRXhwIjpmYWxzZSwibGFiZWwiOiJzaW1wbGUifQ`,
    );
  });
  it(`bySemanticsLabel RegEx`, () => {
    const expected = find.bySemanticsLabel(/complicated/);
    expect(expected).toBe(
      `eyJmaW5kZXJUeXBlIjoiQnlTZW1hbnRpY3NMYWJlbCIsImlzUmVnRXhwIjp0cnVlLCJsYWJlbCI6ImNvbXBsaWNhdGVkIn0`,
    );
  });
});
