document.getElementById('input').focus();

document.getElementsByTagName("body")[0].addEventListener("click", function(){
  document.getElementById('input').focus();
});

const Textual = {
  appendInput: (input) => {
    const prmpt = "$ ";
    const pre = document.createElement("pre");;
    const textNode = document.createTextNode(prmpt + input + '\n');
    pre.appendChild(textNode);
    document.getElementById('output').appendChild(pre);
  },
  appendOutput: (output) => {
    const pre = document.createElement("pre");
    pre.innerHTML = output;
    document.getElementById('output').appendChild(pre);
  },
  link: (url, text) => {
    if (!text) {
      return (text) => {
        return `<a href="${url}" target="_blank">${text}</a>`;
      };
    }
    return `<a href="${url}" target="_blank">${text}</a>`;
  },
  color: (color, text) => {
    if (!text) {
      return (text) => {
        return `<span style="color:${color}">${text}</span>`;
      };
    }
    return `<span style="color:${color}">${text}</span>`;
  },
  replace: (text, changes) => {
    let response = text;
    Object.keys(changes).forEach(key => {
      response = response.replace(key, changes[key](key));
    });
    return response;
  },
  init: (processInput, initialPath) => {
    Textual._processInput = processInput;
    if (initialPath) {
      const output = Textual._processInput(initialPath);
      Textual.appendOutput(output);
    }
  }
};

document.getElementById('input').addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    const input = e.srcElement.value;
    const output = input ? Textual._processInput(input) : '';
    Textual.appendInput(input);
    Textual.appendOutput(output);
    e.srcElement.value = '';
    document.getElementById('window').scrollTo(0, document.getElementById("window").scrollHeight);
  }
});

/* CLIENT DEFINED CODE */

const homeText = Textual.replace(`
...My name is Tautvilas, welcome to my textual home site!...
...Type HELP for the list of available commands.............\n\n`,
{
  commands: Textual.color('orange'),
  Tautvilas: Textual.link('http://www.tautvilas.lt'),
});

function processInput(input='') {
  input = input.toLowerCase().trim();
  if (input === 'home') {
    return homeText;
  } else if (input === 'image') {
    return '<img width="200" height="200" src="https://i.imgur.com/RDsb26sb.jpg" alt="me"/>';
  } else {
    return 'Command not found\n';
  }
}

Textual.init(processInput, window.location.hash.substr(1) || 'home');
