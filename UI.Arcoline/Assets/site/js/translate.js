//import { options } from "../../js/plugins/dropzone/dist/dropzone-amd-module";

  let arrLang = {
        'en': {
          'key1': 'Welcome',
          'About us': 'About us',
          'Services': 'Services',
          'Recruitment': 'Recruitment',
          'News': 'News',
          'Contacts': 'Contacts',

          'key2': 'Our Mission',         
          'key3': 'Promote innovative information technology solutions, with excellence and technical rigour to achieve the objectives of our clients.',
          'key4': 'Our Vision',
          'key5': 'To be a national and international reference in the sector, information and telecommunication technologies, contributing with proficiency and confidentiality in the development of differentiated projects, in order to meet the expectations of our clients.',
          'key6': 'Our values',
          'key7': 'Humility, creativity, commitment, efficiency, human value and professional ethics are the characteristics of our company.',
          'key8': 'BANK',
          'key9': 'Cetim Tecnologia presents solutions for financial institutions in the context of adding or commuting to the best operational banking functionality.',
          'key10': '- GED - Document Management',
          'key11': '- Banking Systems and Solutions',
          'key12': '- Financial Relations',
          'key13': '- Investment & Trade',
          'key14': 'COMMERCIAL',
          'key15': 'We understand the unique know-how of our customers and focus on in the adequate supply of full spectrum solutions for to meet a particular need of each client.',
          'key16': '- Innovative Recycling System',
          'key17': '- IoT- Residential, Commercial, Business',
          'key18': 'INDUSTRY',
          'key19': 'We believe in the innovation of products and methodology of production and installation. Implementation of:',
          'key20': '- CCTV Surveillance Solutions',
          'key21': '- Visual Video Solutions',
          'key22': '- Energy Control Systems',
          'key23': 'HEALTH',
          'key24': 'Technology has brought a strong and welcome change to the healthcare sector and with this we embrace new challenges, with the objective of developing original solutions. Developing  platforms of:',
          'key25': '- Hospital Administrative Management',
          'key26': '- Patient/User Management',
          'key27': 'TELECOMMUNICATIONS / IoT SYSTEMS',
          'key28': 'Since the country lacks technology, CETIM bets on contribution to a smart growth of the country and the continent. Implementation and monitoring of solutions:',
          'key29': '- Smart Cities',
          'key30': '- Cell Sites',
          'key31': '- Data Center',
          'key32': '- Oil and Gas',
          'key33': 'Our contacts',
          'key34': 'Send us a Message!',
          'key35': 'Subject',
          'key36': 'Message',
          'key37': 'Send',
          'key38': 'No news available.',
          'key39': 'We have comprehensive technological solutions for the following sectors agriculture, health, multimedia, quality, and environment, safety of information and hospitality.',
          'key40': 'Welcome',
          'key41': 'Welcome',
          'key42': 'Welcome',
          'key43': 'Welcome',
   

  },
        'pt':{
            'key1': 'Bem-vindo ',
            'About us': 'Sobre nós',
            'Services': 'Serviços',
            'Recruitment': 'Recrutamento',
            'News': 'Notícias',
            'Contacts': 'Contactos',


            'key2': 'Missão',
            'key3': 'Promover soluções inovadoras de tecnologia de informação, com excelência e rigor técnico para o alcance dos objectivos pretendidos pelos nossos clientes.',
            'key4': 'Visão',
            'key5': 'Ser uma referência nacional e internacional no sector das, tecnologias de informação e telecomunição, contribuindo com prossicionalismo e confidencialidade no desenvolvimento de projectos diferenciados, a fim de responder as expectativas dos clientes.',
            'key6': 'Valores',
            'key7': 'Humildade, criatividade, compromisso, eficiência, valor humano e ética profissional são as características da nossa empresa. ',
            'key8': 'BANCA',
            'key9': 'A Cetim Tecnologia apresenta soluções para instituições  financeiras  no âmbito de adicionar ou comutar para  a melhor funcionalidade operacional bancária.',
            'key10': '- GED - Gestão Documental',
            'key11': '- Sistemas e Soluções Bancárias',
            'key12': '- Relações Financeiras',
            'key13': '- Investimento & Comércio',
            'key14': 'COMERCIAL',
            'key15': 'Entendemos o know-how exclusivo dos nossos clientes e focamos  no  fornecimento adequado de soluções de espectro completo para atender às necessidades particulares de cada cliente',
            'key16': '- Sistema inovador de reciclagem',
            'key17': '- IOT- residencial, comercial  e empresarial .',
            'key18': 'INDÚSTRIA',
            'key19': 'Acreditamos na inovação de produtos e da metodologia  de produção e instalação. Implementação de:',
            'key20': '- Soluções vigilância CCTV;',
            'key21': '- Soluções vídeo visuais;',
            'key22': '- Sistemas de controlo de energia.',
            'key23': 'SAÚDE',
            'key24': 'A tecnologia trouxe uma mudança forte e bem-vinda ao sector de saúde e com isso abraçamos novos desafios, com o objetivo de desenvolver  soluções originais. Desenvolvimento de plataformas de:',
            'key25': '- Gestão administrativa hospitalar',
            'key26': '- Gestão de pacientes/utentes',
            'key27': 'TELECOMUNICAÇÕES / SISTEMAS IoT',
            'key28': 'Uma vez que o país  carece de tecnologia, a CETIM aposta na   contribuição para um smart growth do país e do continente.  Implementação e monitorização de soluções:',
            'key29': '- Smart cities;',
            'key30': '- Cell sites;',
            'key31': '- Data center;',
            'key32': '- Oil and gas.',
            'key33': 'Nossos contactos',
            'key34': 'Envie-nos uma mensagem',
            'key35': 'Assunto',
            'key36': 'Mensagem',
            'key37': 'Enviar',
            'key38': 'Sem notícias disponíveis',
            'key39': 'Temos soluções tecnológicas abrangentes aos sectores agrícola, saúde, multimédia, qualidade, ambiente, segurança de informação e hotelaria.',
            'key40': 'Welcome',
            'key41': 'Welcome',
            'key42': 'Welcome',
            'key43': 'Welcome',
  }
};

$(function () {

    let getID = document.getElementById('translateID');
    getID.onchange = function () {

        let lang = this.value;


        $('.lang').each(function (index, element) {
            if ($(this)[0].tagName == 'INPUT' || $(this)[0].tagName == 'TEXTAREA') {
                $(this)[0].attributes['placeholder'].value = arrLang[lang][$(this).attr('key')];
            } else {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            }
        });
    }

 
    $('#mobile_translate_span').click(function () {
        let langMob = this.innerText;
        if (langMob == "PT") {
            $('#li_recruitment').hide();
            $('#section_recruitment').hide();
            langMob="en"
            $('.lang').each(function (index, element) {
                if ($(this)[0].tagName == 'INPUT' || $(this)[0].tagName == 'TEXTAREA') {
                    $(this)[0].attributes['placeholder'].value = arrLang[langMob][$(this).attr('key')];
                } else {
                    $(this).text(arrLang[langMob][$(this).attr('key')]);
                }
            });
            document.getElementById('mobile_translate_span').innerText = "EN";
        }
        else {
            $('#li_recruitment').show();
            $('#section_recruitment').show();
            langMob = "pt"
            $('.lang').each(function (index, element) {
                if ($(this)[0].tagName == 'INPUT' || $(this)[0].tagName == 'TEXTAREA') {
                    $(this)[0].attributes['placeholder'].value = arrLang[langMob][$(this).attr('key')];
                }
                else {
                    $(this).text(arrLang[langMob][$(this).attr('key')]);
                }
            });
            document.getElementById('mobile_translate_span').innerText = "PT";
        }
     
    });
});

 