import {stripIndent} from 'common-tags';
import identity from "./me";

requestAnimationFrame(function ready () {
  const el = document.querySelector('#app');
	// If the body element and the #main element exist
	if (el) {
    render(el);
		return;
	}
	requestAnimationFrame(ready);
});

function render (el) {
  if ( ! el) {
    throw new Error('#app el must be provided');
  }
  // el.innerHTML = myFaceHtml();
  el.innerHTML = stripIndent`
    <style>${stylesheet()}</style>
    ${myFaceHtml(identity)}
  `
}

function myFaceHtml (identity) {
  return stripIndent`
    <div>
      <img
        class="icon"
        src="${identity.icon}"
        />
      <h1>${identity.name}</h1>
      <dl>
        <dt>Location
          <dd>Earth
        <dt>Bio
          <dd>${identity.bio}
        <dt>Next Assignment
          <dd>Customize this myface project. Who will you be on the Internet Computer?
      </dl>
    </div>
  `;  
}

function stylesheet() { return stripIndent`
  .icon {
    max-height: 20em;
    max-width: 20em;
  }
`; }
