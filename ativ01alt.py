import flet
from flet import Text, TextField, FilledButton, Row, Banner, colors, Icon, icons, TextButton

def main(page):
    
    # Dicionário para armazenar os valores dos campos
    dict_values = {
        'constratante': '',
        'medida_judicial': '',
        'outra_parte':'',
        'prolabore': '',
        'exito': '',
        'foro': '',
        'data': '',
    }

    # Função para gerar o contrato
    def gera_contrato(e):
        # Atualiza os valores no dicionário com os valores dos campos de entrada
        dict_values['constratante'] = contratante.value
        dict_values['medida_judicial'] = medida_judicial.value
        dict_values['outra_parte'] = outra_parte.value
        dict_values['prolabore'] = prolabore.value
        dict_values['exito'] = exito.value
        dict_values['foro'] = foro.value
        dict_values['data'] = data.value

        # Verifica se algum campo está vazio
        for val in dict_values.values():
            if not val:
                # Abre um banner de aviso se algum campo estiver vazio
                page.banner.open=True
                page.update()
                return
            
        print('Já é possível gerar o contrato.')

        # Imprime os valores coletados
        print(dict_values)

    # Função para fechar o banner de aviso
    def fecha_banner(e):
        page.banner.open=False
        page.update()

    # Configuração do banner de aviso
    page.banner = Banner(
        bgcolor= colors.AMBER_100,
        leading=Icon(
            icons.DANGEROUS_SHARP,
            color=colors.RED_400,
            size=40
        ),
        content=Text('Opa, Todos os campos devem ser preenchidos.'),
        actions=[
            TextButton(
                'Entendi',
                on_click=fecha_banner
            )
        ]
    )

    # Criação dos elementos de entrada e botão
    titulo = Text(value='Gerador de contrato de prestação de Serviço Advocatícios', size= 20, width='bold')
    contratante = TextField(label='Nome do Contratante', autofocus=True)
    medida_judicial  = TextField(label='Medida judicial')
    outra_parte = TextField(label= 'Outra_parte')
    prolabore = TextField(label= 'Prolabore', prefix_text='R$ ')
    exito = TextField(label= 'Exito', suffix_text=' %')
    foro = TextField(label= 'Foro')
    data = TextField(label= 'Data do contrato')
    botao_gerar =  FilledButton(text= 'Gerar Contrato', on_click=gera_contrato)

    # Adiciona os elementos à página
    page.add(
        Row(
            [
                titulo
            ]
        ),
        Row(
            controls=[
                contratante
            ]
        ),
        Row(
            controls=[
                medida_judicial,
                outra_parte
            ]
        ),
        Row(
            controls=[
                prolabore,
                exito
            ]
        ),
        Row(
            controls=[
                foro,
                data
            ]
        ),
        Row(
            controls=[
                botao_gerar
            ]
        ),
    )

# Inicializa a aplicação
flet.app(target=main)