import { cleanProjectsPalettes } from '../cleaner';

describe('cleaner', () => {
  let mockProjects;
  let mockPalettes;

  beforeEach(() => {
    mockProjects = [{ id: 8, name: 'Project Two' }];
    mockPalettes = [
                    { color_1: '#FFFFFF', project_id: 8 },
                    { color_2: '#000000', project_id: 8 },
                    { color_3: '#000000', project_id: 9 }
                   ];
  });

  it('should clean the projects and palettes into an object', () => {
    const result = cleanProjectsPalettes(mockProjects, mockPalettes);
    const mockExpected = [
      {
        id: 8,
        name: 'Project Two',
        palettes: [{ color_1: '#FFFFFF', project_id: 8 }, { color_2: '#000000', project_id: 8 }]
      }
    ];
    expect(result).toEqual(mockExpected);
  });
});
