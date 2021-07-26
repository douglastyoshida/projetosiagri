/// <reference types="cypress" />  
            // CT-1.1 - Validar segmentos atendidos pelas soluções SIAGRI
                        it('CT-1.1 - Validar segmentos atendidos pelas soluções SIAGRI - Página principal', () => {
                        cy.visit('https://www.siagri.com.br')
                        cy.get('.navbar-nav > :nth-child(3)').click();
                        cy.get('.dropdown-menu > [href="https://www.siagri.com.br/segmentos"]').click();
                        cy.contains('Distribuidor de insumos').should('be.visible')
                        cy.contains('Loja agropecuária').should('be.visible')
                        cy.contains('Armazéns gerais').should('be.visible')
                        cy.contains('Produtor agrícola').should('be.visible')
                        cy.contains('Sementeira').should('be.visible')
                        cy.contains('Outros').should('be.visible')
                        })                        
            //CT-2.0 - validar informações do segmento - Distribuidor de insumos
                        it('CT-2.0: Validar pagina ativa - "Distribuidor de insumos"', () => {
                        cy.visit('https://www.siagri.com.br')
                        cy.get('.navbar-nav > :nth-child(3)').click();
                        cy.get('.dropdown-menu > [href="https://www.siagri.com.br/segmentos"]').click();    
                        cy.get('[href="https://www.siagri.com.br/segmentos/distribuidor-insumos"] > span').click();
                        const url = "https://www.siagri.com.br/segmentos/distribuidor-insumos"
                        cy.location().should((loc) => { 
                        expect(loc.href).to.eq(url)
                        })})
            //CT-2.1 - validar pagina ativa - Distribuidor de insumos
                        it('CT-2.1: Validar informações do banner principal -"Distribuidor de insumos"', () => {
                        cy.contains('Softwares para gestão de distribuidores de insumos agrícolas').should('be.visible')
                        cy.contains('Otimize processos, reduza desperdícios e tenha o controle de suas lojas em qualquer hora e lugar. Com o Grupo Siagri, você compra melhor, evita perdas no estoque, vende com mais eficiência e ainda tem mais segurança nas operações de Barter!').should('be.visible')
                        cy.get('.segmentos-titulo-grid > .container-fluid > .form-open').click();
                        cy.get('#modal-form').should('be.visible')
                        cy.get('#form-close').click();
                        })
            //CT-2.2 Validar informações dos desafios do segmento - Distribuidor de insumos
                        it('CT-2.2: Validar informações do segmento - "Distribuidor de insumos"', () => {
                        cy.get('<div class="d-flex segmentos-vantagens justify-content-between container-fluid flex-row flex-wrap">')
                        cy.contains('Estoque eficiente').should('be.visible')
                        cy.contains('Formação de preços').should('be.visible')
                        cy.contains('Gestão de logística').should('be.visible')
                        cy.contains('Ampliar mix de atividades').should('be.visible')
                        cy.contains('Gestão orçamentária').should('be.visible')
                        })
            //CT-3.0 - validar página ativa  - Loja Agropecuária
                        it('CT-3.0: Validar pagina ativa - "Loja Agropecuária"', () => {
                        cy.visit('https://www.siagri.com.br')
                        cy.get('.navbar-nav > :nth-child(3)').click();
                        cy.get('.dropdown-menu > [href="https://www.siagri.com.br/segmentos"]').click(); 
                        cy.get('[href="https://www.siagri.com.br/segmentos/loja-agropecuaria"] > span').click();
                        const url = "https://www.siagri.com.br/segmentos/loja-agropecuaria"
                        cy.location().should((loc) => { 
                        expect(loc.href).to.eq(url)
                        })})   
            //CT-3.1 - Validar informações do segmento 'LOJA AGROPECUÁRIA'
                        it('CT-3.1: Validar informações do banner principal "Loja Agropecuária"', () => {
                        cy.contains('Softwares para gestão de lojas e varejo agropecuário').should('be.visible')
                        cy.contains('Ganhe agilidade em vendas, confiança nos controles de estoque e custos. Fidelize seu cliente e gerencie sua loja agropecuária de forma completa com o software Siagri').should('be.visible')   
                        cy.get('.segmentos-titulo-grid > .container-fluid > .form-open').click();
                        cy.get('#modal-form').should('be.visible')
                        cy.get('#form-close').click();
                        })
            //CT-3.2 - Validar informações dos desafios do segmento 'Loja Agropecuária'
                        it('CT-3.2 - Validar informações do segmento "Loja Agropecuária"', () => {
                        cy.get('<div class="segmentos-vantagens-grid">')
                        cy.contains('Agilidade no atendimento').should('be.visible')
                        cy.contains('Eficiência operacional').should('be.visible')    
                        cy.contains('Controle de comissionamento').should('be.visible')    
                        cy.contains('Conformidade fiscal').should('be.visible')    
                        cy.contains('Eficiência no fluxo de caixa em dia').should('be.visible') 
                        })
            //CT-4.0 - validar página ativa - Armazéns Gerais
                        it('CT-4.0: Validar pagina ativa - "Armazéns Gerais"', () => {
                        cy.visit('https://www.siagri.com.br')
                        cy.get('.navbar-nav > :nth-child(3)').click();
                        cy.get('.dropdown-menu > [href="https://www.siagri.com.br/segmentos"]').click();     
                        cy.get('[href="https://www.siagri.com.br/segmentos/armazens-gerais"] > span').click();
                        const url = "https://www.siagri.com.br/segmentos/armazens-gerais"
                        cy.location().should((loc) => { 
                        expect(loc.href).to.eq(url)
                        })})
            //CT-4.1 - Validar informações do segmento 'Armazéns Gerais' - BANNER PRINCIPAL
                        it('CT-4.1: Validar informações do banner principal "Armazéns Gerais"', () => {
                        cy.get('.segmentos-titulo-grid')
                        cy.contains('Softwares para gestão de armazéns gerais e cerealistas').should('be.visible')
                        cy.contains('Ganhe eficiência desde o recebimento até a expedição dos grãos. Com o Grupo Siagri, você gerencia todos os processos de armazenagem de grãos com agilidade e segurança').should('be.visible')
                        cy.get('.segmentos-titulo-grid > .container-fluid > .form-open').click();
                        cy.get('#modal-form').should('be.visible')
                        cy.get('#form-close').click();
                        })
            //CT-4.2 - Validar informações dos desafios do segmento 'Armazéns Gerais'
                        it('CT-4.2: Validar informações dos desafios do segmento "Armazéns Gerais"', () => {
                        cy.get('.segmentos-vantagens')
                        cy.contains('Gestão de contratos').should('be.visible')
                        cy.contains('Controle de saldos de terceiros').should('be.visible')
                        cy.contains('Controle de retenções e transgenia').should('be.visible')
                        cy.contains('Análise de exposição').should('be.visible')
                        cy.contains('Controle de serviços prestados').should('be.visible')
                        })
            //CT-5.0 - validar página ativa - 'Produtor Agrícola'
                        it('CT-5.0: Validar pagina ativa - "Produtor Agrícola"', () => {
                        cy.visit('https://www.siagri.com.br')
                        cy.get('.navbar-nav > :nth-child(3)').click();
                        cy.get('.dropdown-menu > [href="https://www.siagri.com.br/segmentos"]').click(); 
                        cy.get('[href="https://www.siagri.com.br/segmentos/produtor-agricola"] > span').click();
                        const url = "https://www.siagri.com.br/segmentos/produtor-agricola"
                        cy.location().should((loc) => { 
                        expect(loc.href).to.eq(url)
                        })})            
            //CT-5.1 - Validar informações do segmento 'Produtor Agrícola' - BANNER PRINCIPAL
                        it('CT-5.1: Validar informações do banner principal "Produtor Agrícola"', () => {
                        cy.get('.segmentos-titulo-grid > .container-fluid')
                        cy.contains('Softwares de gestão para produtores de grãos e algodão').should('be.visible')
                        cy.contains('Gestão do planejamento da safra à contabilidade. Com o Grupo Siagri você gerencia seu negócio de ponta a ponta, centralizando a gestão administrativa, financeira, fiscal e operacional.').should('be.visible')
                        cy.get('.segmentos-titulo-grid > .container-fluid > .form-open').click();
                        cy.get('#modal-form').should('be.visible')
                        cy.get('#form-close').click();
                        }) 
            //CT-5.2 - Validar informações dos desafios do segmento 'Produtor Agrícola'
                        it('CT-5.2: Validar informações dos desafios do segmento "Produtor Agrícola"', () => {
                        cy.get('.segmentos-vantagens')
                        cy.contains('Planejamento de safra').should('be.visible')
                        cy.contains('Gestão de estoque (armazenagem)').should('be.visible')
                        cy.contains('Controle de custos').should('be.visible')
                        cy.contains('Padronização de processos').should('be.visible')
                        cy.contains('Gestão orçamentária').should('be.visible')
                        })           
            //CT-6.0 - validar página ativa - 'Sementeira'
                        it('CT-6.0: Validar pagina ativa - "Sementeira"', () => {
                        cy.visit('https://www.siagri.com.br')
                        cy.get('.navbar-nav > :nth-child(3)').click();
                        cy.get('.dropdown-menu > [href="https://www.siagri.com.br/segmentos"]').click(); 
                        cy.get('[href="https://www.siagri.com.br/segmentos/sementeira"] > span').click();
                        const url = "https://www.siagri.com.br/segmentos/sementeira"
                        cy.location().should((loc) => { 
                        expect(loc.href).to.eq(url)
                        })})
            //CT-6.1 - Validar informações do segmento 'Sementeira' - BANNER PRINCIPAL
                        it('CT-6.1: Validar informações do banner principal "Sementeira"', () => {
                        cy.get('.seg-7 > span')
                        cy.contains('Softwares para gestão de sementeiras').should('be.visible')
                        cy.contains('Ganhe eficiência no processo de beneficiamento de sementes. Com as soluções Siagri, você gerencia desde o recebimento do grão, até o embarque de sementes').should('be.visible')
                        cy.get('.segmentos-titulo-grid > .container-fluid > .form-open').click();
                        cy.get('#modal-form').should('be.visible')
                        cy.get('#form-close').click();
                        })
            //CT-6.2 - Validar informações dos desafios do segmento 'Sementeira'
                        it('CT-6.2: Validar informações dos desafios do segmento "Sementeira"', () => {
                        cy.get('.segmentos-vantagens')
                        cy.contains('Gestão de recebimento, produção e expedição de sementes').should('be.visible')
                        cy.contains('Controle de lotes').should('be.visible')
                        cy.contains('Gestão de vendas das semente').should('be.visible') //no documento contem "sementes" no site da siagri contem "semente"
                        cy.contains('Logística de embarque').should('be.visible')
                        cy.contains('Gestão da colheita e armazenagem de grãos').should('be.visible')
                        })
            
