const exData = {
  // 複数のお題とそれらの子(回答)
  themes: [
    {
      handleName: 'ななしさん',
      id: 0,
      theme: 'こんな〇〇はいやだ',
      jokes: [
        {
          id: 0,
          respondentName: 'はやしさん',
          joke: 'さむい',
          likes: 3
        },
        {
          id: 1,
          respondentName: 'からいさん',
          joke: 'あつい',
          likes: 4
        },
      ],
    },
    {
      handleName: 'いぬ',
      id: 1,
      theme: 'こんな××はいやだ',
      jokes: [
        {
          id: 0,
          respondentName: 'うめぼし',
          joke: 'からい',
          likes: 7
        },
        {
          id: 1,
          respondentName: 'からいさん',
          joke: 'あまい',
          likes: 8
        },
        {
          id: 2,
          respondentName: 'ひかきそさん',
          joke: `改行
                改行
                  シフト  シフト
          `,
          likes: 1000
        },
      ],
    }
  ],

};

export default exData;