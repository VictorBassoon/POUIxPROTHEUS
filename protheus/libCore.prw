user Function doclibcore()
    FwCallApp("hexa")
Return
 
Static Function JsToAdvpl(oWebChannel,cType,cContent)
    Do Case
        // Se a intera��o que recebi for igual a mensagemJavascript
        Case cType == 'mensagemJavascript'
            // Imprimo a informa��o que recebi para trabalhar
            alert('O que veio do JS: ' + cContent)
        // Se a intera��o que recebi for igual a receberProtheus
        Case cType == 'receberProtheus'
            // Envio um comando ADVPL para minha aplica��o Web
            oWebChannel:AdvPLToJS('mensagemProtheus', 'Comando ADVPL')
        Case cType == 'MATA010'
                MATA010()
    End
Return .T.
