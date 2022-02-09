const menuList = [
    {
      idItem: 1,
      nomeItem: 'Pão de Queijo',
      valorItem: 4.00,
      descItem: 'Opções: Tradicional, Frango, Lombo ou Requeijão',
      imgItem: [
        {source: require('../../images/products/prd01/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd01/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd01/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd01/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd01/05.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Tradicional'},
        {idOpt: '02', nomeOpt: 'Frango'},
        {idOpt: '03', nomeOpt: 'Lombo'},
        {idOpt: '04', nomeOpt: 'Requeijão'},
      ]
    },
    {
      idItem: 2,
      nomeItem: 'Torresmo',
      valorItem: 6.00,
      descItem: 'Acompanha sal e limão',
      imgItem: [
        {source: require('../../images/products/prd02/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd02/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd02/03.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Acompanhado de batata-frita'},
        {idOpt: '02', nomeOpt: 'Acompanhado de Mandioca frita'},
      ]
    },
    {
      idItem: 3,
      nomeItem: 'Pamonha',
      valorItem: 9.00,
      descItem: 'Opções: Salgada, doce ou com lombo',
      imgItem: [
        {source: require('../../images/products/prd03/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd03/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd03/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd03/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd03/05.png'), dimensions: { width: 500, height: 250 }},
        // {source: require('../../images/products/prd03/06.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [ 
        {idOpt: '01', nomeOpt: 'Pamonha Doce'},
        {idOpt: '02', nomeOpt: 'Pamonha Salgada'},
        {idOpt: '03', nomeOpt: 'Pamonha com Lombo'},
      ]
    },
    {
      idItem: 4,
      nomeItem: 'Tapioca',
      valorItem: 13.00,
      descItem: 'Recheios: Carne seca, Frango, Chocolate ou Doce de leite',
      imgItem: [
        {source: require('../../images/products/prd04/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd04/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd04/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd04/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd04/05.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd04/06.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Carne seca'},
        {idOpt: '02', nomeOpt: 'Frango'},
        {idOpt: '03', nomeOpt: 'Chocolate'},
        {idOpt: '04', nomeOpt: 'Doce de leite'},
      ]
    },


    {
      idItem: 5,
      nomeItem: 'Feijoada',
      valorItem: 20.00,
      descItem: 'Acompanha: Arroz, couve, farofa e laranja',
      imgItem: [
        {source: require('../../images/products/prd05/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd05/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd05/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd05/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd05/05.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd05/06.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Costelinha'},
        {idOpt: '02', nomeOpt: 'Pé de porco'},
        {idOpt: '03', nomeOpt: 'Lombo'},
        {idOpt: '04', nomeOpt: 'Orelha de porco'},
      ]
    },
    {
      idItem: 6,
      nomeItem: 'Tambaqui',
      valorItem: 45.00,
      descItem: 'Opções: Assado, Frito ou Caldeirada',
      imgItem: [
        {source: require('../../images/products/prd06/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd06/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd06/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd06/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd06/05.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Assado'},
        {idOpt: '02', nomeOpt: 'Frito'},
        {idOpt: '03', nomeOpt: 'Caldeirada'},
      ]
    },
    {
      idItem: 7,
      nomeItem: 'Risotto',
      valorItem: 30.00,
      descItem: 'Opções: Filé Mignon com Gorgonzola, Limão Siciliano ou Salmão',
      imgItem: [
        {source: require('../../images/products/prd07/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd07/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd07/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd07/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd07/05.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Filé Mignon com Gorgonzola'},
        {idOpt: '02', nomeOpt: 'Salmão com Limão Siciliano'},
      ]
    },
    {
      idItem: 8,
      nomeItem: 'Pirarucu grelhado',
      valorItem: 55.00,
      descItem: 'Molhos: Yemanjá, Limão com gengibre ou Tomate',
      imgItem: [
        {source: require('../../images/products/prd08/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd08/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd08/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd08/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd08/05.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Yemanjá'},
        {idOpt: '02', nomeOpt: 'Limão com gengibre'},
        {idOpt: '03', nomeOpt: 'Tomate'},
      ]
    },

    
    {
      idItem: 9,
      nomeItem: 'Suco Natural',
      valorItem: 5.00,
      descItem: 'Opções: Laranja, Uva, Morango ou Amora',
      imgItem: [
        {source: require('../../images/products/prd09/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd09/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd09/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd09/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd09/05.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Laranja'},
        {idOpt: '02', nomeOpt: 'Uva'},
        {idOpt: '03', nomeOpt: 'Morango'},
        {idOpt: '04', nomeOpt: 'Amora'},
      ]
    },
    {
      idItem: 10,
      nomeItem: 'Cachaça',
      valorItem: 1.50,
      descItem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      imgItem: [
        {source: require('../../images/products/prd10/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd10/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd10/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd10/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd10/05.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd10/06.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Velho Barreiro'},
        {idOpt: '02', nomeOpt: '51'},
        {idOpt: '03', nomeOpt: 'Corote'},
        {idOpt: '04', nomeOpt: 'yYiroca'},
      ]
    },
    {
      idItem: 11,
      nomeItem: 'Refrigerante',
      valorItem: 5.00,
      descItem: 'Refrigerantes em lata',
      imgItem: [
        {source: require('../../images/products/prd11/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd11/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd11/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd11/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd11/05.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Coca-Cola'},
        {idOpt: '02', nomeOpt: 'Fanta'},
        {idOpt: '03', nomeOpt: 'Sprite'},
        {idOpt: '04', nomeOpt: 'Pepsi'},
      ]
    },
    {
      idItem: 12,
      nomeItem: 'Cerveja',
      valorItem: 7.00,
      descItem: '600ml',
      imgItem: [
        {source: require('../../images/products/prd12/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd12/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd12/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd12/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd12/05.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Brahma'},
        {idOpt: '02', nomeOpt: 'Skol'},
        {idOpt: '03', nomeOpt: 'Heineken'},
        {idOpt: '04', nomeOpt: 'Original'},
      ]
    },

    {
      idItem: 13,
      nomeItem: 'Sorvetão',
      valorItem: 25.00,
      descItem: 'Soverte caseiro com cobertura ',
      imgItem: [
        {source: require('../../images/products/prd13/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd13/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd13/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd13/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd13/05.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Cobertura de chocolate'},
        {idOpt: '02', nomeOpt: 'Cobertura de caramelo'},
        {idOpt: '03', nomeOpt: 'Cobertura de morango'},
      ]
    }, 
    {
      idItem: 14,
      nomeItem: 'Torta doce',
      valorItem: 10.00,
      descItem: 'Torta doce com cobertura',
      imgItem: [
        {source: require('../../images/products/prd14/01.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd14/02.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd14/03.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd14/04.png'), dimensions: { width: 500, height: 250 }},
        {source: require('../../images/products/prd14/05.png'), dimensions: { width: 500, height: 250 }},
      ],
      OptionsItem: [
        {idOpt: '01', nomeOpt: 'Chocolate'},
        {idOpt: '02', nomeOpt: 'Limão'},
        {idOpt: '03', nomeOpt: 'Morango'},
      ]
    },  
  ];

export default menuList;