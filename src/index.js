const stripBrackets = (open = '[', close = ']', join = [',']) =>
  s => {
    const buffers = [{value: '', joined: false}];
    for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
        case open:
          buffers.push({value: '', joined: false});
          break;
        case close: {
          const buffer = buffers.pop();
          if (buffer.joined && buffers.length !== 1) {
            buffers[buffers.length - 1].value += `${open}${buffer.value}${close}`;
          } else {
            buffers[buffers.length - 1].value += buffer.value;
          }
          break;
        }
        default:
          buffers[buffers.length - 1].value += s[i];
          if (join.includes(s[i])) {
            buffers[buffers.length - 1].joined = true;
          }
      }
    }
    return buffers.map(b => b.value).join('');
  };

module.exports = stripBrackets;
