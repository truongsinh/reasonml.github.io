import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as Colors from '../../src/utils/colors';
import debounce from '../../src/utils/debounce';
import * as lzString from 'lz-string';
import codemirror from 'codemirror';
import {css} from 'glamor';

import javascript from 'codemirror/mode/javascript/javascript';
import mllike from 'codemirror/mode/mllike/mllike';
import rust from 'codemirror/mode/rust/rust';

const {accent, gray} = Colors;
const compress = lzString.compressToEncodedURIComponent;
const decompress = lzString.decompressFromEncodedURIComponent;

const styles = {
  output: {
    flex: 1,
    display: "flex",
    padding: 10,
  },
  outputLine: {
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    display: 'block',
  },

  errorBody: {
    fontFamily: 'monospace',
    fontSize: 12,
  },
  error: {
    backgroundColor: '#faa',
    padding: '10px 20px',
  },
  warning: {
    backgroundColor: '#fff8dc',
    padding: '10px 20px',
  },

  container: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '50px',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    '@media(max-width: 500px)': {
      position: 'static',
      display: 'block',
    },
  },
  inner: {
    flexDirection: 'row',
    flex: 1,
    display: "flex",
    '@media(max-width: 500px)': {
      display: 'block',
      flexDirection: 'column',
    },
  },
  column: {
    flex: 1,
    display: "flex",
    flexDirection: 'column',
    minWidth: 0,
    '@media(max-width: 500px)': {
      display: 'block',
      flexShrink: 'initial',
      flexGrow: 'initial',
      // flex: 0,
    },
  },
  row: {
    flex: 1,
    display: "flex",
    minHeight: 0,
    background: gray,
    border: '1px solid #d6d4d4',
    borderBottom: 'none',
    borderRight: 'none',
    position: 'relative',
    overflow: 'auto',
    '@media(max-width: 500px)': {
      // display: 'block',
      height: 300,
      marginBottom: 20,
      flexShrink: 'initial',
      flexGrow: 'initial',
      // flex: 0,
    },
  },

  label: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(246, 244, 244, 0.8)',
    padding: '1em',
    textTransform: 'uppercase',
    color: '#988',
    fontSize: 12,
    lineHeight: '12px',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 20,
    borderRadius: '0 0 0 5px',
  },

  toolbar: {
    display: 'flex',
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  toolbarButton: {
    display: 'flex',
    borderLeft: '1px solid #d6d4d4',
    padding: '1em 2em',
    flexDirection: 'row',

    '&:hover, &:hover button': {
      color: accent,
      cursor: 'pointer'
    },

    '@media(max-height: 770px)': {
      padding: '.5em 1em',
    },
  },

  shareButton: {
    position: 'relative',

    '& input': {
      background: gray,
      transition: 'all 250ms',
      width: 0,
      padding: 0,
    },

    '&:hover input': {
      width: '25vw',
      marginRight: '1em',
    },

    '&:hover .tooltip': {
      display: 'block'
    }
  },

  tooltip: {
    display: 'none',
    position: 'absolute',
    zIndex: 100,
    top: '100%',
    right: '1em',
    background: 'rgba(0, 0, 0, .6)',
    color: 'white',
    whiteSpace: 'nowrap',
    padding: '.15em .8em',
    borderRadius: '.25em',
    fontSize: '.8rem',

    '& .arrow': {
      position: 'absolute',
      content: ' ',
      bottom: '100%',
      right: '2.5em',
      height: '0',
      width: '0',
      border: '.5em solid transparent',
      pointerEvents: 'none',
      borderBottomColor: 'rgba(0, 0, 0, .6)',
      marginLeft: '.5em'
    },

    '& .confirmation': {
      display: 'none',
      padding: '0 .75em',
    },

    '&.s-show-confirmation': {
      '& .help': {
        display: 'none'
      },
      '& .confirmation': {
        display: 'block'
      }
    }
  },

  toolbarButtonRight: {
    borderRight: '1px solid #d6d4d4',
    borderLeft: 'none',
    position: 'relative',

    '&:hover ul': {
      display: 'block'
    }
  },
  toolbarButtonFill: {
    marginRight: 'auto',
  },

  exampleMenu: {
    position: 'absolute',
    color: '#555',
    zIndex: 10,
    background: 'white',
    display: 'none',
    top: '100%',
    left: 0,
    minWidth: '100%',
    width: '25vw',
    boxShadow: '1px 1px 1px rgba(0, 0, 0, .2)',
    borderTop: '1px solid #d6d4d4',
    margin: 0,
    padding: 0,
    listStyle: 'none',

    '& li': {
      margin: 0,
      padding: '.5em 2em',

      '&:first-child': {
        paddingTop: '1em'
      },
      '&:last-child': {
        paddingBottom: '1em'
      }
    },

    '& li:hover': {
      color: accent
    }
  },

  toolbarCheckbox: {
    display: 'flex',
    marginLeft: '1em',
    alignSelf: 'center',
    justifySelf: 'center',
  },

  fakeCodemirrorPreload: {
    display: 'flex',
    flexGrow: 1,
    width: 30,
  },
  fakeCodemirrorPreloadInner: {
    display: 'flex',
    backgroundColor: '#f7f7f7',
    borderRight: '1px solid rgb(221, 221, 221)',
    flexGrow: 1,
  },

  codemirror: {
    flex: 1,
    display: "flex",
    '& .CodeMirror': {
      flex: 1,
      display: "flex",
      height: 'auto',
      background: 'transparent',

      '@media(max-width: 500px)': {
        height: 300,
      },
    },
  },

  codemirrorSafari: {
    '& .CodeMirror': {
      height: 300,
    },
  },
};

Object.keys(styles).map(function(key) {
  styles[key] = css(styles[key]);
});
console.log(styles);

class CodeMirror extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.editor = codemirror(this.div, this.props.options);
    this.editor.setValue(this.props.value)

    this.editor.on('change', (cm, metadata) => {
        const value = this.editor.getValue();
        if (value !== this.props.value && this.props.onChange) {
            this.props.onChange(value)
        }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value && nextProps.value !== this.editor.getValue()) {
        this.editor.setValue(nextProps.value);
    }
  }

  render() {

    return (
      <div className={this.props.className} ref={div => this.div = div}/>
    )
  }
}

const oldSyntax = () => {
  let url = window.location;
  url = url.toString();
  url = url.replace(/reasonml.github.io/,"reasonml-old.github.io")
  // url = url.replace(/localhost:8000/,"reasonml-old.github.io")
  window.location = url;
};

const examples = [{
  name: 'Tree sum',
  code:
`type tree = Leaf | Node(int, tree, tree);

let rec sum = (item) => {
  switch (item) {
  | Leaf => 0
  | Node(value, left, right) => value + sum(left) + sum(right);
  }
}

let myTree =
  Node(
    1,
    Node(2, Node(4, Leaf, Leaf), Node(6, Leaf, Leaf)),
    Node(3, Node(5, Leaf, Leaf), Node(7, Leaf, Leaf))
  );

sum(myTree) |> Js.log;`
}, {
  name: 'FFI - Base64',
  code:
`[@bs.val] external btoa : string => string = "";
[@bs.val] external atob : string => string = "";

let text = "Hello World!";
Js.log(text |> btoa);
Js.log(text |> btoa |> atob);`
}, {
  name: 'Recursion - Factorial',
  code:
`/* Based on https://rosettacode.org/wiki/Factorial#Recursive_50 */
let rec factorial = (n) =>
  n <= 0
  ? 1
  : n * factorial(n - 1);

Js.log(factorial(6));`
}, {
  name: 'Recursion - Greatest Common Divisor',
  code:
`/* Based on https://rosettacode.org/wiki/Greatest_common_divisor#OCaml */
let rec gcd = (a, b) =>
  switch (a mod b) {
  | 0 => b
  | r => gcd(b, r)
  };

Js.log(gcd(27, 9));`
}, {
  name: 'Recursion - Towers of Hanoi',
  code:
`/* Based on https://rosettacode.org/wiki/Towers_of_Hanoi#OCaml */
let rec hanoi = (n, a, b, c) =>
  if (n > 0) {
    hanoi(n - 1, a, c, b);
    Js.log({j|Move disk from pole $a to pole $b|j});
    hanoi(n - 1, c, b, a)
  };

hanoi(4, 1, 2, 3);`
}, {
  name: 'Json',
  code:
`let person = {
  "name": {"first": "Bob", "last": "Zhmith"},
  "age": 32
};

let json =
  person
  |> Js.Json.stringifyAny
  |> Js.Option.getExn
  |> Js.Json.parseExn;

let name =
  json
  |> Js.Json.decodeObject
  |> Js.Option.andThen([@bs] ((p) => Js.Dict.get(p, "name")))
  |> Js.Option.andThen([@bs] ((json) => Js.Json.decodeObject(json)))
  |> Js.Option.getExn;

let firstName =
  Js.Dict.get(name, "first")
  |> Js.Option.andThen([@bs] ((json) => Js.Json.decodeString(json)))
  |> Js.Option.getExn;

let lastName =
  Js.Dict.get(name, "last")
  |> Js.Option.andThen([@bs] ((json) => Js.Json.decodeString(json)))
  |> Js.Option.getExn;

Js.log({j|Hello, $firstName $lastName|j});`
}, {
  name: 'FizzBuzz',
  code:
`/* Based on https://rosettacode.org/wiki/FizzBuzz#OCaml */
let fizzbuzz = (i) =>
  switch (i mod 3, i mod 5) {
  | (0, 0) => "FizzBuzz"
  | (0, _) => "Fizz"
  | (_, 0) => "Buzz"
  | _ => string_of_int(i)
  };

for (i in 1 to 100) {
  Js.log(fizzbuzz(i))
};`
}, {
  name: 'Normal distribution of random numbers',
  code:
`/* Based on https://rosettacode.org/wiki/Random_numbers#OCaml */
let pi = 4. *. atan(1.);

let random_gaussian = () =>
  1. +. sqrt((-2.) *. log(Random.float(1.))) *. cos(2. *. pi *. Random.float(1.));

Array.init(42, (_) => random_gaussian()) |> Array.iter(Js.log);`
}, {
  name: 'Regex',
  code:
`let input = {|
  <html>
    <head>
      <title>A Simple HTML Document</title>
    </head>
    <body>
      <p>This is a very simple HTML document</p>
      <p>It only has two paragraphs</p>
    </body>
  </html>
|};

input
|> Js.String.match([%re "/<p\\b[^>]*>(.*?)<\\/p>/gi"])
|> (
  fun
  | Some(result) => result |> Js.Array.forEach(Js.log)
  | None => Js.log("no matches")
);`
}, {
  name: 'String interpolation',
  code:
`for (a in 1 to 10) {
  for (b in 1 to 10) {
    let product = a * b;
    Js.log({j|$a times $b is $product|j})
  }
};`
}];

const queryParamPrefixFor = language => `?${language}=`;

const retrieve = () => {
  function fromQueryParam(language) {
    const queryParam = window.location.search; // returns ?language=blablabla
    const prefix = queryParamPrefixFor(language);

    if (queryParam.startsWith(prefix)) {
      return {
        language,
        code: decompress(queryParam.slice(prefix.length)) || '' // decompressing an empty string returns null, joyously!
      };
    }
  }

  function fromLocalStorage() {
    try {
      const json = localStorage.getItem('try-reason');
      return json && JSON.parse(json);
    } catch (e) {
      console.error(e);
    }
  }

  // WTH? There's some retarded automatic semicolon insertion going on, actively causing bugs. Hence the parens. Wonderful!
  return (
    fromQueryParam('reason') ||
    fromQueryParam('ocaml') ||
    fromLocalStorage() ||
    { language: 'reason', code: examples[0].code }
  );
};

const generateShareableUrl = (language, code) =>
  window.location.origin +
  window.location.pathname +
  queryParamPrefixFor(language) +
  compress(code);


const persist = debounce((language, code) => {
  try {
    localStorage.setItem('try-reason', JSON.stringify({ language, code }));
  } catch (e) {
    console.error(e);
  }

  // avoid a refresh of the page; we also don't want every few keystrokes to
  // create a new history for the back button, so replace the current one
  window.history.replaceState(null, '', generateShareableUrl(language, code));
}, 100);

const errorTimeout = 500

const waitUntilScriptsLoaded = done => {
  const tout = setInterval(() => {
    // test for bucklescript compiler existence and refmt existence (one of the exposed method is printML)
    if (window.ocaml && window.printML) {
      clearInterval(tout)
      done()
    }
  }, 10)
}

const isSafari =
  (typeof navigator !== 'undefined' &&
    /iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(navigator.userAgent)) ||
  typeof safari !== 'undefined'

class ShareButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfirmation: false
    }
    this.onClick = () => {
      this.props.onClick();
      this.setState({showConfirmation: true});
      setTimeout(() => this.setState({showConfirmation: false}), 2000);
    }
  }

  render() {
    const {url} = this.props;
    const {showConfirmation} = this.state;

    return (
      <div className={`${styles.toolbarButton} ${styles.shareButton}`}>
        <input
          id="shareableUrl"
          value={this.props.url}
          readOnly
        />
        <button onClick={this.onClick}>Share</button>
        <span className={showConfirmation ? 'tooltip s-show-confirmation' : 'tooltip'} className={styles.tooltip}>
          <span className="arrow"></span>
          <span className="help">Click to copy to clipboard</span>
          <span className="confirmation">Copied</span>
        </span>
      </div>
    );
  }
}

const formatErrorLocation = ({startLine, startLineStartChar, endLine, endLineEndChar}) => {
  if (startLine === endLine) {
    if (startLineStartChar === endLineEndChar) {
      return `Line ${startLine}:${startLineStartChar}`
    } else {
      return `Line ${startLine}:${startLineStartChar}-${endLineEndChar}`
    }
  } else {
    return `Line ${startLine}:${startLineStartChar}-Line ${endLine}:${endLineEndChar}`
  }
};

const stripErrorNumberFromReasonSyntaxError = (error) => {
  return error.replace(/\d+: /, '');
}

const capitalizeFirstChar = (str) => {
  if (str.length === 0) return '';
  return str[0].toUpperCase() + str.slice(1);
};

class Try extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reason: '/* loading */',
      reasonSyntaxError: null,
      ocaml: '(* loading *)',
      js: '// loading',
      jsIsLatest: false,
      autoEvaluate: true,
      output: [],
    }

    this.err = null

    this._output = item =>
      this.setState(state => ({
        output: state.output.concat(item)
      }));

    this.output = item => {
      if (this.outputOverloaded)
        return;

      if (this.state.output.length > 100) {
        this.outputOverloaded = true;
        this._output({ type: 'error', contents: ['[Too much output!]']})
        return;
      }

      this._output(item);
    }

    this.initEvalWorker = () => {
      this.evalWorker = new Worker('/js/evalWorker.js');
      this.evalWorker.onmessage = ({data}) => {
        if (data.type === 'end') {
          clearTimeout(data.contents);
        } else {
          this.output(data);
        }
      }
      this.evalWorker.onerror = err => {
        this.errorTimerId = setTimeout(
          () => this.setState(_ => ({
            jsError: err
          })),
          errorTimeout
        );
      }
    }

    this.evalJs = (code) => {
      this.outputOverloaded = false;
      this.setState(
        state => ({ output: [] }),
        () => {
          const timerId = setTimeout(() => {
            this.evalWorker.terminate();
            this.initEvalWorker();
            this._output({type: 'error', contents: ['[Evaluation timed out!]']});
          }, 1000);
          this.evalWorker.postMessage({
            code: wrapInExports(code),
            timerId
          });
        }
      )
    }

    this.updateReason = newReasonCode => {
      if (newReasonCode === this.state.reason) return
      persist('reason', newReasonCode);
      clearTimeout(this.errorTimerId)

      this.setState((prevState, _) => {
        let newOcamlCode = prevState.ocaml;
        try {
          newOcamlCode = window.printML(window.parseRE(newReasonCode))
          this.tryCompiling(newReasonCode, newOcamlCode)
        } catch (e) {
          this.errorTimerId = setTimeout(
            () => this.setState(_ => {
              return {
                reasonSyntaxError: e,
                compileError: null,
                ocamlSyntaxError: null,
                jsError: null,
                js: '',
                ocaml: '',
                output: [],
              }
            }),
            errorTimeout
          )
        }

        return {
          reason: newReasonCode,
          ocaml: newOcamlCode,
          reasonSyntaxError: null,
          compileError: null,
          ocamlSyntaxError: null,
          jsError: null,
          shareableUrl: generateShareableUrl('reason', newReasonCode)
        }
      });
    }

    this.updateOCaml = newOcamlCode => {
      if (newOcamlCode === this.state.ocaml) return
      persist('ocaml', newOcamlCode);
      clearTimeout(this.errorTimerId)

      this.setState((prevState, _) => {
        let newReasonCode = prevState.reason;
        try {
          newReasonCode = window.printRE(window.parseML(newOcamlCode))
          this.tryCompiling(newReasonCode, newOcamlCode)
        } catch (e) {
          this.errorTimerId = setTimeout(
            () => this.setState(_ => {
              return {
                ocamlSyntaxError: e,
                compileError: null,
                reasonSyntaxError: null,
                jsError: null,
                js: '',
                reason: '',
                output: [],
              }
            }),
            errorTimeout
          )
        }

        return {
          reason: newReasonCode,
          ocaml: newOcamlCode,
          reasonSyntaxError: null,
          compileError: null,
          ocamlSyntaxError: null,
          jsError: null,
          shareableUrl: generateShareableUrl('ocaml', newOcamlCode)
        }
      });
    }

    this.compile = (code) => {
      const _consoleError = console.error;
      let warning = '';
      console.error = (...args) => args.forEach(argument => warning += argument + `\n`);
      const res = JSON.parse(window.ocaml.compile(code));
      console.error = _consoleError;
      return [res, warning || null];
    }

    this.tryCompiling = debounce((reason, ocaml) => {
      try {
        const [res, warning] = this.compile(ocaml);
        if (res.js_code) {
          this.setState(_ => ({
            js: res.js_code,
            jsIsLatest: true,
            compileWarning: warning
          }))
          if (this.state.autoEvaluate) {
              this.evalJs(res.js_code);
          }
          return
        } else {
          this.errorTimerId = setTimeout(
            () => this.setState(_ => ({
              compileError: res,
              compileWarning: null,
              js: '',
            })),
            errorTimeout
          )
        }
      } catch (err) {
        this.errorTimerId = setTimeout(
          () => this.setState(_ => ({
            compileError: err,
            compileWarning: null,
            js: '',
          })),
          errorTimeout
        )
      }
      this.setState(_ => {
        return {
          compileError: null,
          compileWarning: null,
          jsIsLatest: false,
          output: [],
        }
      })
    }, 100)

    this.toggleEvaluate = () => {
      if (!this.state.autoEvaluate) {
        this.evalLatest();
      }
      this.setState(_ => {
        return {
          autoEvaluate: !this.state.autoEvaluate
        }
      })
    }

    this.evalLatest = () => {
      if (this.state.jsIsLatest) {
        this.evalJs(this.state.js);
      }
    }

    this.copyShareableUrl = () => {
      let input = document.getElementById('shareableUrl');
      input.select();
      document.execCommand('copy');
    }

  }

  componentDidMount() {
    waitUntilScriptsLoaded(() => {
      this.initEvalWorker();
      const {language, code} = retrieve();
      language === 'reason' ? this.updateReason(code) : this.updateOCaml(code)
    })
  }

  componentWillUnmount() {
    this.evalWorker && this.evalWorker.terminate();
  }

  render() {
    const {
      reason,
      ocaml,
      js,
      reasonSyntaxError,
      compileError,
      compileWarning,
      ocamlSyntaxError,
      jsError
    } = this.state;
    const codemirrorStyles = [
      styles.codemirror,
      isSafari && styles.codemirrorSafari,
    ];
    return (
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <div className={`${styles.toolbarButton} ${styles.toolbarButtonRight}`}>
            <button className="try-examples">Examples</button>
            <ul className={styles.exampleMenu}>
              {examples.map(example => <li key={example.name} onClick={() => this.updateReason(example.code)}>{example.name}</li>)}
            </ul>
          </div>
          <div className={`${styles.toolbarButton} ${styles.toolbarButtonRight} ${styles.toolbarButtonFill}`}>
            <button onClick={oldSyntax}>
              Old Syntax
            </button>
          </div>
          <div className={styles.toolbarButton}>
            <button onClick={this.evalLatest}>Evaluate</button>
            <input
              className={styles.toolbarCheckbox}
              type="checkbox"
              checked={this.state.autoEvaluate}
              onChange={this.toggleEvaluate}
            />
          </div>
          <ShareButton
            url={this.state.shareableUrl}
            onClick={this.copyShareableUrl}
          />
        </div>
        <div className={styles.inner}>
          <div className={styles.column}>
            <div className={styles.row}>
              <div className={styles.label}>Reason</div>
              <CodeMirror
                className={codemirrorStyles}
                value={reason}
                options={{
                  mode: 'rust',
                  lineNumbers: true,
                }}
                onChange={this.updateReason}
              />
              {reasonSyntaxError &&
                <div className={styles.error}>
                  <div className={styles.errorBody}>
                    {formatErrorLocation(reasonSyntaxError.location)}
                    {' '}
                    {capitalizeFirstChar(stripErrorNumberFromReasonSyntaxError(reasonSyntaxError.message))}
                  </div>
                </div>}
            </div>
            <div className={styles.row}>
              <div className={styles.label}>OCaml</div>
              <CodeMirror
                className={codemirrorStyles}
                value={ocaml}
                options={{
                  mode: 'mllike',
                  lineNumbers: true,
                }}
                onChange={this.updateOCaml}
              />
              {ocamlSyntaxError &&
                <div className={styles.error}>
                  <div className={styles.errorBody}>
                    {ocamlSyntaxError.message}
                  </div>
                </div>}
              {compileError &&
                <div className={styles.error}>
                  <div className={styles.errorBody}>
                    {compileError.js_error_msg
                      ? compileError.js_error_msg
                      : compileError.message}
                  </div>
                </div>}
              {compileWarning &&
                <div className={styles.warning}>
                  <div className={styles.errorBody}>
                    {compileWarning}
                  </div>
                </div>}
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.row}>
              <div className={styles.label}>JavaScript</div>
              <CodeMirror
                className={codemirrorStyles}
                value={js}
                options={{
                  mode: 'javascript',
                  lineNumbers: true,
                  readOnly: 'nocursor',
                }}
              />
              {jsError &&
                <div className={styles.error}>
                  <div className={styles.errorBody}>
                    {jsError.message}
                  </div>
                </div>}
            </div>
            <div className={styles.row}>
              <div className={styles.label}>Output</div>
              <div className={styles.output}>
                {this.state.output.map((item, i) =>
                  <div className={styles.outputLine} key={i}>
                    {formatOutput(item)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <script async src={'/js/bs.js'} />
        <script async src={'/js/refmt.js'} />
      </div>
    )
  }
}

const wrapInExports = code =>
  `(function(exports) {${code}})({})`

const formatOutput = item =>
  item.contents.join(' ')

ReactDOM.render(<Try />, document.querySelector('#tryWrapper'));
