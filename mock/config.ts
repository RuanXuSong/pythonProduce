/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-16 14:55:50
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-18 11:03:50
 */
export default {
  '/config': {
    success: true,
    data: {
      cardListConfig: {
        cardList: 'cardList',
        cardItems: ['card1', 'card2', 'test'],
        cardInfo: {
          url: 'www.baidu.com',
          name: 'name',
          content: 'name',
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
