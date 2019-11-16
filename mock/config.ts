export default {
  '/config': {
    success: true,
    data: {
      cardListConfig: {
        cardItems: ['card1', 'card2'],
        cardInfo: {
          url: 'www.baidu.com',
          name: 'name',
        },
      },
      pageConfig: 'pages',
      infoConfig: {
        title: 'title',
        content: 'content',
      },
    },
    code: 20000,
    message: '成功',
  },
};
