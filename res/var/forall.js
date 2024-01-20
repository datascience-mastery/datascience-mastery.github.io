openedType = localStorage.openedType;
function ShowImage(url) {
    console.log('worked');
    return `<img class="main-img" src="../res/var/${openedType}/img/${url}">`;
}

function FullCode(code, hint='') {
    Prism.highlightAll();
    if (hint) {
        add_ = `<div class='code-hint'>${hint}</div`
    }
    return `
<div class='code-con'>
${hint}
<div class="code-bg">
<pre><code class="language-python">${code}</code></pre>
</div>
</div>
    `;
}

function OutputCode(code, color='green', output=true) {
    Prism.highlightAll();
    if (output) {
        txt = "<h3>Output:</h3>"
    } else { txt = ''}
    return `
${txt}
<div style="border-color:${color};" class="code-bg green-code output-code">
<pre><code>${code}</code></pre>
</div>
    `;
}

function WordCode(code) {
    return `<span class='wordCode'>${code}</span>`;
}

function Note(code) {
    return `<p class='note-txt'><strong>Note:</strong>${code}</p>`
}

function SetWidth(id,code) {
    setTimeout(() => {
        console.log("#in"+id);
        $(".forTest").text(code);
        wid = $(".forTest").width();
        console.log(wid);
        console.log($("#in"+id));
        $("#in"+id).css({width:wid});
    }, 100);
}

fullTotal = 0;
function Typing(code) {
    if (window['inputAns'+k] == null) {
        window['inputAns'+k] = [];
        window['totalInput'+k] = 0;
    }
    console.log('k',k)
    window['totalInput'+k]++;
    fullTotal++;
    window['inputAns'+k].push(code);
    SetWidth(fullTotal,code)
    return `<input type='text' id='in${fullTotal}' class='in${window['totalInput'+k]}'>`;
}