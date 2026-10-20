/*
Third-party attribution and licence texts

# Third-Party Notices

The generated keyboard integration in `CRAFT.js` includes code and symbol/layout
metadata from BasedPL 0.1.61 (Answer.AI and contributors), distributed under
Apache-2.0. Its licence is reproduced in `the Apache-2.0 text below`.
Source: https://github.com/AnswerDotAI/basedpl

BasedPL's browser language bar is based on Adam Brudzewsky's APL language bar.
The source identifies copyright (c) 2011-2020 Nikolay G. Nikolov and Adam
Brudzevski under the MIT licence, reproduced in `the MIT text below`.
Source: https://abrudz.github.io/lb/

Local changes add completion selection with arrow keys, support the animation
magic header, and integrate the language bar with the custom SolveIt palette.
The generated code retains its upstream attribution comments.

The notebooks contain personal study notes and examples following Jeremy
Howard's APL study group. Screenshots and quoted teaching material remain
attributable to their original authors. This project is an independent learning
resource; third-party material retains its respective rights and licences.

APL-language-bar-MIT.txt
MIT License

Copyright (c) 2011-2020 Nikolay G. Nikolov and Adam Brudzevski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


BasedPL-Apache-2.0.txt

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

// BPL editor palette. Loaded by SolveIt as a native Craft module.
window.bplCraftCatalogue = // Merge the installed symbol metadata with every keyboard-layout insertion.
((symbols, layout) => {
  const core=symbols.filter(s=>s.glyph).map(s=>({...s,source:'Core symbols'}));
  const known=new Set(core.map(s=>s.glyph)), extras=new Map();
  const sup='⁰¹²³⁴⁵⁶⁷⁸⁹', sub='₀₁₂₃₄₅₆₇₈₉';
  const example=(label,code)=>({label,code});
  function describe(glyph,keys,family){
    const s={glyph,name:glyph,source:'Additional characters',kind:'keyboard character',categories:['Writing code'],
      shortcut:keys.join(' '),documentation:'keyboard.html',aliases:'keyboard layout',
      description:'Additional entry from the installed BPL keyboard layout.'};
    if(family==='superscript'){
      s.categories=['Superscripts'];s.kind='superscript';s.documentation='scripts.html#superscripts';
      s.aliases='superscript raised power exponent repeat iteration';
      const negative=glyph.startsWith('⁻'), digit=[...sup].indexOf(glyph.at(-1));
      if(digit>=0){
        const n=negative?-digit:digit;
        s.name='superscript '+(negative?'minus ':'')+digit;
        s.categories.push('Numbers','Functions');
        s.description=negative&&digit>0?`After a value: raise it to power ${n}. After a function: apply its inverse ${digit} time${digit===1?'':'s'}.`:
          `After a value: raise it to power ${n}. After a function: repeat it ${digit} time${digit===1?'':'s'}.`;
        if(negative)s.aliases+=' negative minus'+(digit>0?' reciprocal inverse':' zero identity');
        if(!negative&&digit===2)s.aliases+=' square squared';
        if(!negative&&digit===3)s.aliases+=' cube cubed';
        s.examples=[example('Power of two','2'+glyph)];
        if(!negative)s.examples.push(example('Repeat an increment','{⍵+1}'+glyph+' 5'));
        if(negative&&digit===1)s.examples.push(example('Inverse of exponential','(*⁻¹) 1'));
      }else if(glyph==='⁻'){
        s.name='superscript minus';s.categories.push('Numbers','Functions');s.aliases+=' negative reciprocal inverse';
        s.description='Prefix for a negative superscript. Follow it with a superscript digit, as in ⁻¹.';
        s.examples=[example('Reciprocal','2⁻¹')];
      }else if(glyph==='ᵀ'){
        s.name='superscript T';s.categories.push('Arrays');s.aliases+=' transpose matrix rows columns';
        s.description='Transpose the array immediately before it: swap rows and columns.';
        s.examples=[example('Transpose a matrix','(2 2⍴1 2 3 4)ᵀ')];
      }else if(glyph==='ᵘ'){
        s.name='superscript u';s.categories.push('Functions');s.aliases+=' scalar function enclosure box';
        s.description='Wrap the preceding function in a scalar value.';
        s.examples=[example('Shape of a scalar holding plus','⍴+ᵘ')];
      }else{
        s.name='caret';s.kind='keyboard character';s.categories=['Other characters','Writing code'];s.documentation='keyboard.html';
        s.aliases='caret keyboard fallback superscript';
        s.description='Plain ^ from the original superscript menu. Use superscript digits or * to write a power in BPL.';
      }
    }else if(family==='subscript'){
      s.categories=['Subscripts'];s.kind='subscript';s.documentation='scripts.html#subscripts';s.aliases='subscript lowered';
      const negative=glyph.startsWith('₋'), digit=[...sub].indexOf(glyph.at(-1));
      if(digit>=0){
        s.name='subscript '+(negative?'minus ':'')+digit;s.categories.push('Range & index','Arrays');
        s.aliases+=' index indexing item position select element';
        s.description=negative&&digit>0?`Select index -${digit}, counting ${digit} place${digit===1?'':'s'} from the end.`:
          `Select index ${digit} from the preceding array. Index 0 is the first item.`;
        if(negative)s.aliases+=' negative minus'+(digit===1?' last final tail':'');
        if(!digit)s.aliases+=' first';
        s.examples=[example('Select from ten items','[10 20 30 40 50 60 70 80 90 100]'+glyph)];
      }else if(glyph==='₋'){
        s.name='subscript minus';s.categories.push('Range & index');s.aliases+=' negative index from end';
        s.description='Prefix for a negative index. Follow it with a subscript digit, as in ₋₁ for the last item.';
        s.examples=[example('Select the last item','[10 20 30]₋₁')];
      }else if(glyph==='_'){
        s.name='underscore';s.kind='identifier character';s.categories=['Other characters','Writing code'];s.documentation='terms.html';
        s.aliases+=' underscore name identifier variable';s.description='An ordinary underscore for names, such as my_value. Also retained from the original subscript menu.';
        s.examples=[example('A name containing an underscore','my_value←42\nmy_value')];
      }else{
        const suffixes={
          'ₓ':['exact integer','exact integer precision','Marks an exact integer literal.','3ₓ'],
          'ⱼ':['complex separator','complex imaginary real','Separates the real and imaginary parts of a complex number.','2ⱼ3'],
          'ₑ':['exponent separator','scientific notation exponent decimal','Introduces the base-10 exponent in a numeric literal.','1ₑ3'],
          'ᵣ':['rational separator','rational fraction numerator denominator exact','Separates the numerator and denominator of an exact rational.','1ᵣ3']
        };
        const details=suffixes[glyph];
        if(details){s.name=details[0];s.kind='number notation';s.categories.push('Numbers');s.documentation='numbers.html';s.aliases+=' '+details[1];s.description=details[2];s.examples=[example('Number literal',details[3])];}
      }
    }else if(glyph==='∆'||glyph==='⍙'){
      s.categories.push('Other characters');
      s.name=glyph==='∆'?'delta':'delta underbar';s.kind='identifier character';s.documentation='terms.html';
      s.aliases='delta triangle identifier name variable';s.description='A character allowed in BPL names, rather than an operation on its own.';
      s.examples=[example('A name using '+glyph,glyph+'value←42\n'+glyph+'value')];
    }
    return s;
  }
  function add(glyph,keys,family){if(glyph&&!known.has(glyph)&&!extras.has(glyph))extras.set(glyph,describe(glyph,keys,family));}
  function walk(state,keys,family){
    const info=layout.states[state];add(info.terminator,[...keys,'Space'],family);
    for(const [key,value] of Object.entries(info.keys))
      typeof value==='string'?add(value,[...keys,key],family):walk(value.state,[...keys,key],family);
  }
  for(const [key,value] of Object.entries(layout.option))
    typeof value==='string'?add(value,[key]):walk(value.state,[key],value.state);
  const order=s=>s.categories.includes('Superscripts')?0:s.categories.includes('Subscripts')?1:2;
  return [...core,...[...extras.values()].sort((a,b)=>order(a)-order(b)||(a.glyph==='^'||a.glyph==='_')-(b.glyph==='^'||b.glyph==='_'))];
});
window.bplCraftPalette = // SolveIt BPL palette. Uses the merged BPL catalogue and Monaco's edit API.
((symbols, examples = {}, stripSize = {}) => {
  window.solveitBplPalette?.dispose();
  // Override these four pixel values in the SolveIt setup cell.
  stripSize = {fontSize:19, buttonWidth:21, buttonHeight:26, gap:0.5, ...stripSize};
  const d = document, key = 'solveit.bpl.favourites.v1', recentKey='solveit.bpl.recent.v1', recentLimit=20;
  const isMac=/Mac|iPhone|iPad/.test(navigator.platform), toggleShortcut=(isMac?'⌘':'Ctrl')+'+Shift+8';
  const groups = {
    'Numbers': '+-×÷*⍟√⌊⌈|!π○⊼⊽',
    'Compare': '=≠≡≢<>≤≥~∧∨',
    'Range & index': '⍳↦⍸⌷⊃↑↓↕',
    'Arrays': '⍴≢,⍪⌽⊖⍉↑↓↕⊂⊆⊃∊∪∩⍷⍋⍒#',
    'Functions': '/⌿\\⍀¨⍨⊗⌸∘⍤⍥@⍣⍠∂⇄↢↣',
    'Writing code': '←⎕⍺⍵⍶⍹∇⍝⋄•¯∞⍬'
  };
  const extra = {'⍳':'range zero based zero indexed sequence indices', '↦':'range one based one indexed sequence inclusive interval',
    '=':'eq equal equality comparison', '≠':'eq equal equality comparison unequal not equal',
    '≡':'eq equal equality comparison match whole array same', '≢':'eq equal equality comparison not match count length size tally',
    '/':'sum total reduce fold', '\\':'running cumulative scan', '⍴':'dimensions size shape reshape', '⎕':'print display output input', '@':'under transform inverse'};
  const defaults = ['←','⍳','↦','⍴','≢','≡','=','≠','×','÷','/','⍺','⍵','⍝'];
  let favourites; try { favourites=JSON.parse(localStorage.getItem(key)); } catch {}
  favourites = new Set(Array.isArray(favourites) ? favourites : defaults);
  const catalogue = symbols.filter(s => s.glyph).map(s => ({...s,
    categories: [s.source||'Core symbols',...(s.categories||[]),...Object.entries(groups).filter(([,gs])=>[...gs].includes(s.glyph)).map(([name])=>name)],
    search: [s.glyph,s.name,s.monad,s.dyad,s.aliases,extra[s.glyph]||''].join(' ').toLowerCase().replaceAll('-',' ')
  }));
  const byGlyph=new Map(catalogue.map(s=>[s.glyph,s]));
  const readRecent=value=>{try{const saved=JSON.parse(value);return Array.isArray(saved)?[...new Set(saved)].filter(g=>byGlyph.has(g)).slice(0,recentLimit):[];}catch{return [];}};
  let recent=[];try{recent=readRecent(localStorage.getItem(recentKey));}catch{}
  const families=[{name:'Superscripts',label:'²',matches:s=>s.categories.includes('Superscripts')},
    {name:'Subscripts',label:'₂',matches:s=>s.categories.includes('Subscripts')},
    {name:'Other characters',label:'∆',matches:()=>true}];
  const familyFor=s=>families.find(f=>f.matches(s));
  const root=d.createElement('section'); root.id='bpl-palette'; root.setAttribute('aria-label','BPL glyph palette');
  const icon=path=>`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  const filterIcon=icon('<path d="M3 5h18M6 12h12M10 19h4"/>'),
    browseIcon=icon('<path d="M12 5v15M12 5C8 2 4 3 2 4v15c3-1 6-1 10 1 4-2 7-2 10-1V4c-2-1-6-2-10 1Z"/>'),
    closeIcon=icon('<path d="m6 6 12 12M6 18 18 6"/>');
  root.innerHTML=`<div class="bp-row"><div class="bp-strip" aria-label="All BPL glyphs"></div><div class="bp-tools">
    <button type="button" class="bp-magic bp-icon" aria-label="Add BPL magic" title="Add %%bpl on the first line (Code only)">BPL</button>
    <label class="bp-filter bp-icon" title="Filter glyphs: All">${filterIcon}<select class="bp-category" aria-label="Filter glyphs"></select></label>
    <button type="button" class="bp-browse bp-icon" aria-expanded="false" aria-label="Browse glyph help" title="Browse glyph help">${browseIcon}</button></div></div>
    <div class="bp-menu" hidden role="dialog" aria-label="Additional characters"><div class="bp-menu-head"><strong></strong><button type="button" class="bp-menu-close bp-icon" aria-label="Close character menu">${closeIcon}</button></div><div class="bp-menu-grid"></div></div>
    <div class="bp-panel" hidden><div class="bp-panel-head"><input class="bp-search" type="search" placeholder="Find a glyph by name or meaning…" aria-label="Search BPL glyphs by meaning"><span class="bp-category-name" aria-live="polite"></span><button type="button" class="bp-clear-recent" hidden>Clear history</button></div>
    <div class="bp-body"><div class="bp-results" aria-label="Glyph results"></div><aside class="bp-help" aria-label="Glyph help"></aside></div>
    <div class="bp-status" role="status" aria-live="polite"></div></div>`;
  for (const [name,value] of Object.entries({
    'button-width':stripSize.buttonWidth,'button-height':stripSize.buttonHeight,
    'font-size':stripSize.fontSize,gap:stripSize.gap,'wide-width':Math.max(32,stripSize.buttonWidth)
  })) root.style.setProperty('--bp-'+name,value+'px');
  const search=root.querySelector('.bp-search'), panel=root.querySelector('.bp-panel'), results=root.querySelector('.bp-results'), help=root.querySelector('.bp-help'), status=root.querySelector('.bp-status'), browse=root.querySelector('.bp-browse'), categorySelect=root.querySelector('.bp-category');
  const menu=root.querySelector('.bp-menu'), menuGrid=root.querySelector('.bp-menu-grid'), clearRecent=root.querySelector('.bp-clear-recent'), magicButton=root.querySelector('.bp-magic');
  let category='Core symbols', selected, pinned, menuAnchor, enabled=true, frame=0;
  const controller=new AbortController(), listen=(el,event,fn,capture=false)=>el.addEventListener(event,fn,{signal:controller.signal,capture});
  const node=(tag,text,cls)=>{const n=d.createElement(tag); n.textContent=text; if(cls)n.className=cls; return n;};
  function positionPanel(){
    const r=root.getBoundingClientRect(), anchorTop=d.getElementById('full_editor')?.getBoundingClientRect().top??r.top;
    const above=anchorTop-8, below=innerHeight-r.bottom-8, upwards=above>=below;
    if(!panel.hidden){
      panel.style.height=Math.min(304,Math.max(100,(upwards?above:below)-8))+'px';
      panel.style.bottom=upwards?`calc(100% + ${r.top-anchorTop+8}px)`:'auto';panel.style.top=upwards?'auto':'calc(100% + 8px)';
    }
    if(!menu.hidden){
      menu.style.maxHeight=Math.max(80,(upwards?above:below)-8)+'px';
      menu.style.bottom=upwards?`calc(100% + ${r.top-anchorTop+8}px)`:'auto';menu.style.top=upwards?'auto':'calc(100% + 8px)';
      menu.style.left=Math.max(3,Math.min((menuAnchor?.getBoundingClientRect().left??r.left)-r.left,r.width-menu.offsetWidth-5))+'px';
    }
  }
  function closeMenu(restoreFocus=false){
    menu.hidden=true;menuAnchor?.setAttribute('aria-expanded','false');if(restoreFocus)menuAnchor?.focus();menuAnchor=undefined;
  }
  function familyButton(f,entries){
    const b=node('button','','bp-family');b.type='button';b.title=f.name+' · '+entries.length+' entries';b.setAttribute('aria-label','Open '+f.name.toLowerCase());b.setAttribute('aria-haspopup','dialog');b.setAttribute('aria-expanded','false');
    b.append(node('span',f.label),node('small','▴'));
    b.onclick=()=>{
      if(menuAnchor===b&&!menu.hidden){closeMenu();return;}
      open(false);closeMenu();menuAnchor=b;menu.hidden=false;b.setAttribute('aria-expanded','true');
      menu.setAttribute('aria-label',f.name);menu.querySelector('strong').textContent=f.name+' · '+entries.length;
      menuGrid.replaceChildren(...entries.map(s=>glyphButton(s,true)));positionPanel();menuGrid.querySelector('button')?.focus();
    };return b;
  }
  function open(value=true){
    value=value&&enabled;
    if(value)closeMenu();
    if(panel.hidden===value){panel.hidden=!value;browse.setAttribute('aria-expanded',String(value));browse.innerHTML=value?closeIcon:browseIcon;browse.title=value?'Close glyph help':'Browse glyph help';browse.setAttribute('aria-label',browse.title);}
    positionPanel();
  }
  function currentEditor(){return window.monaco?.editor?.getEditors?.().find(e=>d.getElementById('myeditor')?.contains(e.getDomNode()) && !e.getOption(window.monaco.editor.EditorOption.readOnly));}
  function codeMode(){return d.querySelector('#full_editor #msg_type')?.value==='code' && !!d.querySelector('#full_editor #tabh-code.uk-active');}
  function addMagic(){
    const ed=currentEditor();if(!ed || !codeMode())return;
    const model=ed.getModel(), sel=ed.getSelection();if(!model || !sel)return;
    if(/^%%\S/.test(model.getLineContent(1))){ed.focus();return;}
    const prefix='%%bpl'+model.getEOL(), start=model.getOffsetAt(sel.getStartPosition())+prefix.length, end=model.getOffsetAt(sel.getEndPosition())+prefix.length;
    ed.pushUndoStop();
    ed.executeEdits('bpl-magic',[{range:new window.monaco.Range(1,1,1,1),text:prefix}],()=>{
      const from=model.getPositionAt(start), to=model.getPositionAt(end);
      return [new window.monaco.Selection(from.lineNumber,from.column,to.lineNumber,to.column)];
    });
    ed.pushUndoStop();ed.focus();open(false);closeMenu();status.textContent='Added %%bpl; Undo removes the header.';
  }
  function insert(text,example=false,glyph=text){
    const ed=currentEditor(); if(!ed){status.textContent='Place the cursor in the editor first.';return;}
    const model=ed.getModel(), sel=ed.getSelection(); if(!model || !sel)return;
    const codeTab=codeMode();
    const value=model.getValue(), eol=model.getEOL(), firstLine=model.getLineContent(1);
    const hasMagic=/^%%(?:bpl|apl)(?:[ \t]|$)/.test(firstLine);
    let start=model.getOffsetAt(sel.getStartPosition()), end=model.getOffsetAt(sel.getEndPosition());
    // Keep an existing magic line intact, even when the cursor is on that line.
    if(codeTab && hasMagic && start<=firstLine.length){
      if(value.length===firstLine.length){start=end=value.length;text=eol+text;}
      else {start=firstLine.length+eol.length;end=Math.max(start,end);}
    }
    if(example && value.trim()){
      const before=value.slice(0,start), after=value.slice(end);
      if(before && !before.endsWith('\n') && !text.startsWith(eol))text=eol+text;
      if(after && !after.startsWith('\n') && !after.startsWith('\r\n'))text+=eol;
    }
    const from=model.getPositionAt(start), to=model.getPositionAt(end), inserted=text;
    let range=new window.monaco.Range(from.lineNumber,from.column,to.lineNumber,to.column), cursor=start+text.length;
    if(codeTab && !hasMagic){
      const prefix='%%bpl'+eol;
      text=prefix+value.slice(0,start)+text+value.slice(end);range=model.getFullModelRange();cursor+=prefix.length;
    }
    ed.pushUndoStop(); ed.executeEdits('bpl-palette',[{range,text}],()=>{const pos=model.getPositionAt(cursor);return [new window.monaco.Selection(pos.lineNumber,pos.column,pos.lineNumber,pos.column)];}); ed.pushUndoStop(); ed.focus();
    closeMenu();
    if(byGlyph.has(glyph)){
      recent=[glyph,...recent.filter(g=>g!==glyph)].slice(0,recentLimit);try{localStorage.setItem(recentKey,JSON.stringify(recent));}catch{}
      if(category==='Recently used')render();
    }
    status.textContent=example?'Example inserted'+(codeTab?'. Run it when ready':'')+'; Ctrl+Z undoes insertion.':'Inserted '+inserted.trim()+(codeTab&&!hasMagic?' · added %%bpl':'');
  }
  function glyphButton(s,compact=false){
    const b=node('button',s.glyph,'bp-glyph'); b.type='button'; b.title=[s.name,s.description,s.monad,s.dyad].filter(Boolean).join(' · '); b.setAttribute('aria-label',(compact?'Insert ':'Pin help for ')+s.glyph+' '+s.name);
    b.classList.toggle('bp-combination',[...s.glyph].length>1);
    if(!compact)b.setAttribute('aria-pressed',String(pinned===s));
    const preview=()=>{if(!panel.hidden && !compact)showHelp(s);};
    b.addEventListener('pointerenter',preview); b.addEventListener('focus',()=>{if(!pinned)preview();});
    b.addEventListener('mousedown',e=>e.preventDefault());
    b.addEventListener('click',()=>{
      if(compact){insert(s.glyph);return;}
      pinned=pinned===s?undefined:s;
      results.querySelectorAll('.bp-glyph').forEach(button=>button.setAttribute('aria-pressed',String(button.textContent===pinned?.glyph)));
      showHelp(s);status.textContent=pinned?'Pinned '+s.glyph+' · hover to preview; leave the grid to return · click again to unpin':'Unpinned · hover for help · click a glyph to pin it';
    });return b;
  }
  const strip=root.querySelector('.bp-strip');
  function fitStrip(){positionPanel();}
  const resizeObserver=new ResizeObserver(fitStrip);resizeObserver.observe(strip);
  function showHelp(s){
    if(selected!==s)help.scrollTop=0;
    selected=s; help.replaceChildren(); const h=node('h4',''); h.append(node('span',s.glyph,'bp-glyph'),node('span',s.name.replaceAll('-',' ')));
    if(pinned===s)h.append(node('span','Pinned','bp-pin-label'));
    const star=node('button',favourites.has(s.glyph)?'★':'☆','bp-star'); star.type='button'; star.title=favourites.has(s.glyph)?'Remove favourite':'Add favourite'; star.setAttribute('aria-label',star.title); star.setAttribute('aria-pressed',String(favourites.has(s.glyph)));
    star.onclick=()=>{favourites.has(s.glyph)?favourites.delete(s.glyph):favourites.add(s.glyph);try{localStorage.setItem(key,JSON.stringify([...favourites]));}catch{}showHelp(s);if(category==='Favourites')render();};h.append(star);help.append(h);
    const add=node('button','Insert '+s.glyph,'bp-insert');add.type='button';add.setAttribute('aria-label','Insert glyph '+s.glyph);add.onmousedown=e=>e.preventDefault();add.onclick=()=>insert(s.glyph);help.append(add);
    const shortcut=s.shortcut?.trim(), keyNames={'-':'Minus','\\':'Backslash','/':'Slash',"'":'Quote','`':'Backtick'};
    const shifted={'+':'=','?':'/','<':',','>':'.','^':'6','_':'5',')':'0'};
    if(shortcut){
      const keys=shortcut.split(/\s+/), first=keys.shift(), shift=shifted[first]||(/^[A-Z]$/.test(first)?first.toLowerCase():null);
      const chord=(isMac?'Option+':'Alt+')+(shift?'Shift+':'')+(keyNames[shift||first]||shift||first);
      if(!keys.length && ['¯','¨','○','⎕','⍭'].includes(s.glyph))keys.push('Space');
      help.append(node('p','Shortcut: '+[chord,...keys.map(k=>keyNames[k]||k)].join(', then ')));
    }else help.append(node('p','Type directly on your keyboard.'));
    if(s.source==='Additional characters')help.append(node('p','Additional characters'+([...s.glyph].length>1?' · inserts '+[...s.glyph].length+' characters':'')));
    const defs=s.kind==='function' ? [['One input (monadic)',s.monad],['Two inputs (dyadic)',s.dyad]] : [['Kind',s.kind.replaceAll('-',' ')],['Meaning',s.description||[s.monad,s.dyad].filter(Boolean).join(' / ')]];
    for(const [label,meaning] of defs)if(meaning)help.append(node('p',label+': '+(s.description?meaning:meaning.replaceAll('-',' '))));
    if(extra[s.glyph]?.includes('range'))help.append(node('p',s.glyph==='⍳'?'⍳4 starts at 0 and stops before 4.':'↦4 starts at 1 and includes 4; 0↦4 starts at 0.'));
    const practice=examples[s.glyph]||s.examples||[];
    for(const ex of practice){const b=node('button','','bp-example');b.type='button';b.title='Insert example at the cursor';b.append(node('small',ex.label+' · insert'),node('br',''),node('code',ex.code));b.onmousedown=e=>e.preventDefault();b.onclick=()=>insert(ex.code,true,s.glyph);help.append(b);}
    if(!practice.length)help.append(node('p','See the official reference for examples.'));
    const link=node('a','Full BPL documentation ↗');link.href='https://answerdotai.github.io/basedpl/'+(s.documentation||'glyphs/'+encodeURIComponent(s.name)+'.html');link.target='_blank';link.rel='noopener';help.append(link);
  }
  function render(){
    closeMenu();
    const terms=search.value.toLowerCase().trim().replaceAll('-',' ').split(/\s+/).filter(Boolean);
    const candidates=category==='Recently used'?recent.map(g=>byGlyph.get(g)):catalogue;
    const found=candidates.filter(s=>(category==='All'||category==='Recently used'||category==='Favourites'&&favourites.has(s.glyph)||s.categories.includes(category))&&terms.every(t=>s.glyph===t||s.search.split(/\s+/).some(word=>word.startsWith(t))));
    if(pinned&&!found.includes(pinned))pinned=undefined;
    const grouped=!terms.length&&['All','Additional characters'].includes(category), direct=grouped?found.filter(s=>s.source!=='Additional characters'):found;
    strip.dataset.wide=String(direct.some(s=>s.source==='Additional characters'));
    strip.replaceChildren(...direct.map(s=>glyphButton(s,true)));
    if(grouped)for(const f of families){const entries=found.filter(s=>s.source==='Additional characters'&&familyFor(s)===f);if(entries.length)strip.append(familyButton(f,entries));}
    strip.setAttribute('aria-label',category+' BPL glyphs');
    if(!found.length)strip.append(node('p',category==='Recently used'&&!recent.length?'No recent entries yet. Insert a glyph to start.':category==='Favourites'?'No favourites match. Star a glyph in Browse to save it.':'No matches. Clear the search or choose All.','bp-empty'));
    results.replaceChildren(...found.map(s=>glyphButton(s))); if(!found.length)results.append(node('p','No matches. Try another word or All.'));
    categorySelect.value=category;categorySelect.parentElement.title='Filter glyphs: '+category;categorySelect.parentElement.dataset.active=String(category!=='Core symbols');
    clearRecent.hidden=category!=='Recently used';clearRecent.disabled=!recent.length;
    const summary=root.querySelector('.bp-category-name');
    summary.textContent=terms.length?found.length+' match'+(found.length===1?'':'es')+(category==='All'?'':' in '+category):(category==='All'?'All entries':category)+' · '+found.length;
    summary.title=summary.textContent;
    status.textContent=found.length+' entries · hover for help · click to pin · use Insert in the help panel';
    if(!found.length){selected=undefined;help.replaceChildren(node('p','Search by name or meaning, or choose another category.'));}
    else showHelp(pinned||found.find(s=>s===selected)||found[0]);
    fitStrip();
  }
  listen(results,'pointerleave',()=>{if(pinned&&selected!==pinned)showHelp(pinned);});
  for(const name of ['All','Core symbols','Additional characters','Favourites','Recently used',...Object.keys(groups),'Superscripts','Subscripts','Other characters']){const option=node('option',name);option.value=name;categorySelect.append(option);}
  listen(clearRecent,'click',()=>{recent=[];try{localStorage.removeItem(recentKey);}catch{}render();});
  listen(window,'storage',e=>{if(e.key!==recentKey&&e.key!==null)return;recent=readRecent(e.newValue);if(category==='Recently used')render();});
  listen(root.querySelector('.bp-menu-close'),'click',()=>closeMenu(true));
  listen(magicButton,'mousedown',e=>e.preventDefault());listen(magicButton,'click',addMagic);
  listen(categorySelect,'change',()=>{category=categorySelect.value;render();});
  listen(search,'input',()=>{open();render();});listen(browse,'click',()=>{open(panel.hidden);if(!panel.hidden)search.focus();});
  listen(d,'pointerdown',e=>{if(!root.contains(e.target)){open(false);closeMenu();}});listen(window,'resize',positionPanel);
  listen(root,'keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();if(!menu.hidden)closeMenu(true);else{open(false);currentEditor()?.focus();}}});
  function togglePalette(){enabled=!enabled;mount();}
  // Capture the exact chord before SolveIt, Monaco or glyph-input handlers see it.
  listen(window,'keydown',e=>{
    if(e.isComposing||e.code!=='Digit8'||!e.shiftKey||e.altKey||!(isMac?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey))return;
    e.preventDefault();e.stopImmediatePropagation();if(!e.repeat)togglePalette();
  },true);
  function mount(){
    frame=0;const container=d.getElementById('full_editor'), editor=d.getElementById('myeditor');
    if(container&&editor&&root.parentElement!==container)editor.before(root);
    magicButton.disabled=!codeMode();
    root.hidden=!enabled;
    if(!enabled){open(false);closeMenu();}else fitStrip();
    const old=d.querySelector('.ngn_lb');if(old&&!old.hidden)old.hidden=true;
    const toggle=d.getElementById('bpl-symbol-toggle');if(toggle){toggle.setAttribute('aria-pressed',String(enabled));toggle.setAttribute('aria-keyshortcuts',(isMac?'Meta':'Control')+'+Shift+8');toggle.title='Show or hide BPL toolbar ('+toggleShortcut+')';toggle.onclick=togglePalette;}
  }
  const observer=new MutationObserver(()=>{if(!frame)frame=requestAnimationFrame(mount);});
  observer.observe(d.body,{childList:true,subtree:true,attributes:true,attributeFilter:['aria-selected']});
  render();mount();
  window.solveitBplPalette={dispose(){controller.abort();observer.disconnect();resizeObserver.disconnect();cancelAnimationFrame(frame);const toggle=d.getElementById('bpl-symbol-toggle');if(toggle){toggle.onclick=null;toggle.removeAttribute('aria-keyshortcuts');toggle.title='Show or hide BPL symbols';}root.remove();}};
});

// BEGIN GENERATED BPL BOOTSTRAP
(() => {
const start=()=>{
if(!document.getElementById("bpl-craft-fonts")){const s=document.createElement("style");s.id="bpl-craft-fonts";s.textContent="/* Code fonts for the magics and the docs. The docs load this file through the symlink nbs/fonts.css. */\n:root { --bpl-font: SAX2B; --apl-font: BQN386; }\n@font-face { font-family: SAX2B; src: local(\"SAX2B\"), url(\"https://cdn.jsdelivr.net/gh/AnswerDotAI/basedpl@main/nbs/fonts/SAX2B.woff2\") format(\"woff2\"); }\n@font-face { font-family: BQN386; src: local(\"BQN386\"), url(\"https://cdn.jsdelivr.net/gh/dzaima/BQN386@master/BQN386.woff2\") format(\"woff2\"); }\n.bpl_out { font-family: var(--bpl-font), monospace !important; line-height: 1.05 !important; }\n.bpl_choices button[aria-selected=\"true\"]{background:#2463a8;color:white}";document.head.append(s);}
// Based on Adám Brudzewsky's APL language bar: https://abrudz.github.io/lb
// MIT License, Copyright (c) 2011-2020 Nikolay G. Nikolov and Adam Brudzevski.
// BPL name completion, editor adapters, dark mode and overlay layout by Jeremy Howard.
((symbols, input, layout) => {
    const d = document;
    // Docs pages have no bar, except a page with a `data-bpl` editor, such as the playground.
    if (d.querySelector('.ngn_lb') || d.querySelector('meta[name=generator][content^=quarto]') && !d.querySelector('[data-bpl]')) return;

    const {inCode, bplStart, entry, press, reset} = input(symbols, layout);
    const shortcuts = new Map(symbols.map(({glyph, shortcut}) => [glyph, shortcut]));
    let leftAlt = false, rightAlt = false;

    function textareaRect(t) {
        const mirror = d.createElement('div'), caret = d.createElement('span'), css = getComputedStyle(t), rect = t.getBoundingClientRect();
        for (const p of ['font', 'lineHeight', 'letterSpacing', 'padding', 'border', 'boxSizing', 'width', 'tabSize']) mirror.style[p] = css[p];
        Object.assign(mirror.style, {position: 'fixed', visibility: 'hidden', whiteSpace: 'pre-wrap', overflowWrap: 'break-word',
            left: `${rect.left - t.scrollLeft}px`, top: `${rect.top - t.scrollTop}px`});
        mirror.textContent = t.value.slice(0, t.selectionStart);
        caret.textContent = '\u200b';
        mirror.append(caret);
        d.body.append(mirror);
        const result = caret.getBoundingClientRect();
        mirror.remove();
        return result;
    }

    function editor(target) {
        if (target.closest?.('.text_cell, .jp-MarkdownCell')) return;
        const m = window.monaco?.editor?.getEditors?.().find(e => e.hasTextFocus());
        if (m) {
            const model = m.getModel(), p = m.getPosition(), selection = m.getSelection();
            if (model.getLanguageId() === 'markdown' || m.getOption(window.monaco.editor.EditorOption.readOnly)) return;
            return {id: m, text: model.getValue(), pos: model.getOffsetAt(p), empty: selection.isEmpty(), bpl: model.getLanguageId() === 'bpl',
                rect: () => {
                    const r = m.getDomNode().getBoundingClientRect(), c = m.getScrolledVisiblePosition(p);
                    return {left: r.left + c.left, bottom: r.top + c.top + c.height};
                },
                insert: (text, from = model.getOffsetAt(selection.getStartPosition())) => {
                    const a = model.getPositionAt(from), b = selection.getEndPosition();
                    m.pushUndoStop();
                    m.executeEdits('aplnb', [{range: {startLineNumber: a.lineNumber, startColumn: a.column,
                        endLineNumber: b.lineNumber, endColumn: b.column}, text}], () => {
                        const end = model.getPositionAt(from + text.length);
                        return [new window.monaco.Selection(end.lineNumber, end.column, end.lineNumber, end.column)];
                    });
                    m.pushUndoStop();
                    m.focus();
                }};
        }
        const view = target.closest?.('.cm-editor')?.querySelector('.cm-content')?.cmTile?.view;
        if (view) {
            if (view.state.readOnly) return;
            const sel = view.state.selection.main;
            return {id: view, text: view.state.doc.toString(), pos: sel.head, empty: sel.empty,
                rect: () => view.coordsAtPos(sel.head),
                insert: (text, from = sel.from) => {
                    view.dispatch({changes: {from, to: sel.to, insert: text}, selection: {anchor: from + text.length}, userEvent: 'input.complete'});
                    view.focus();
                }};
        }
        if (target.tagName !== 'TEXTAREA' || target.readOnly || target.disabled) return;
        return {id: target, text: target.value, pos: target.selectionStart, empty: target.selectionStart === target.selectionEnd, bpl: target.hasAttribute('data-bpl'),
            rect: () => textareaRect(target),
            insert: (text, from = target.selectionStart) => {
                target.focus();
                target.selectionStart = from;
                d.execCommand('insertText', false, text);
            }};
    }

    const host = d.createElement('div');
    host.innerHTML = `<div class="ngn_lb" aria-label="BPL symbols"><button class="ngn_x" title="Close symbol bar">×</button><button class="ngn_o" title="Toggle overlay/push-down"></button></div>
        <div class="bpl_choices" role="group" aria-label="BPL symbol completions" hidden></div>
        <style>
        .ngn_lb,.bpl_choices{background:#eee;color:#111;font:15px var(--bpl-font),monospace;z-index:2147483647}
        .ngn_lb{position:fixed;top:0;left:0;right:0;border-bottom:1px solid #999;padding:2px}
        .ngn_lb button,.bpl_choices button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;padding:2px 4px}
        .ngn_lb button:hover,.bpl_choices button:hover{background:#777;color:white}
        .ngn_x,.ngn_o{float:right}
        .bpl_choices{position:fixed;max-height:240px;max-width:calc(100vw - 16px);overflow:auto;border:1px solid #888;border-radius:4px;box-shadow:0 3px 12px #0003;padding:4px}
        .bpl_choices button{display:block;width:100%;text-align:left;white-space:nowrap}
        .bpl_choices small{display:block;padding:4px}
        .ngn_lb .bpl_dead::after{content:'▾';font-size:9px;margin-left:1px}
        .bpl_choices.bpl_menu{max-width:min(320px,calc(100vw - 16px))}
        .bpl_menu button{display:inline-block;width:auto;min-width:28px;text-align:center}
        @media(prefers-color-scheme:dark){.ngn_lb,.bpl_choices{background:#222;color:#ddd}.ngn_lb button:hover,.bpl_choices button:hover{background:#bbb;color:#111}}
        </style>`;
    d.body.append(host);
    const bar = host.querySelector('.ngn_lb'), tip = host.querySelector('.bpl_choices'), toggle = bar.querySelector('.ngn_o');
    let overlay = false, active, lastEditor, choice, keyInput = false, picked = 0;
        function highlight() {
            tip.setAttribute('role', 'listbox');
            [...tip.querySelectorAll('button')].forEach((b, i) => {
                b.setAttribute('role', 'option'); b.setAttribute('aria-selected', String(i === picked));
            });
        }
    const originalPadding = d.body.style.paddingTop;
    try { overlay = localStorage.getItem('ngn_lb_overlay') === '1'; } catch {}
    function reflow() {
        toggle.textContent = overlay ? '▼' : '▲';
        d.body.style.paddingTop = overlay || bar.hidden ? originalPadding : `${bar.offsetHeight}px`;
    }
    const names = new Map(symbols.map(({glyph, name, monad, dyad}) =>
        [glyph, [name, monad, dyad].filter(Boolean).join(' ')]));
    function stateGlyphs(state) {
        const {terminator, keys} = layout.states[state];
        return [terminator, ...Object.values(keys).flatMap(value => typeof value === 'string' ? [value] : stateGlyphs(value.state))];
    }
    const groups = new Map(Object.values(layout.option).filter(value => value.state).map(({state}) =>
        [layout.states[state].terminator, [...new Set(stateGlyphs(state))]]));
    const variants = new Set([...groups.values()].flatMap(glyphs => glyphs.slice(1)));
    function button(glyph, name) {
        const b = d.createElement('button');
        b.type = 'button'; b.textContent = glyph; b.title = (name || glyph) + (shortcuts.get(glyph) || ''); b.dataset.glyph = glyph;
        return b;
    }
    // Related glyphs stay together; arrows meet at the boundary between menus and plain buttons.
    const order = [...new Set([
        ...'^_¯¨○⎕≡⍭↑↓←↦↢↣⇄∨∧⍺⍵∆∇⋄∊⍳⊂⊃∩∪⊥⊤⊣⊢×÷⌊⌈≤≥≠√π', ...groups.keys(), ...names.keys()
    ])];
    for (const glyph of [...order.filter(g => groups.has(g)), ...order.filter(g => !groups.has(g))]) {
        if (!groups.has(glyph) && (variants.has(glyph) || /^[\x20-\x7e]+$/.test(glyph))) continue;
        const b = button(glyph, names.get(glyph));
        if (groups.has(glyph)) {
            b.textContent = {'^': '²', '_': '₂'}[glyph] || glyph;
            b.classList.add('bpl_dead');
            b.setAttribute('aria-expanded', 'false');
            b.title += ' (variants)';
        }
        bar.append(b);
    }
    new ResizeObserver(reflow).observe(bar);
    reflow();

    function cancel() {
        choice?.anchor?.setAttribute('aria-expanded', 'false');
        active = undefined; choice = undefined; tip.hidden = true;
    }
    function show(e, item, anchor) {
        tip.classList.toggle('bpl_menu', !!anchor);
        tip.setAttribute('aria-label', anchor ? 'BPL symbol variants' : 'BPL symbol completions');
        anchor?.setAttribute('aria-expanded', 'true');
        if (choice?.item.query !== item.query || choice?.anchor !== anchor) {
            picked = 0; tip.replaceChildren(); tip.scrollTop = 0;
            for (const [glyph, name] of item.found) {
                const b = button(glyph, name);
                if (!anchor) b.textContent = `${glyph} ${b.title}`;
                tip.append(b);
            }
            if (!item.found.length) {
                const note = d.createElement('small'); note.textContent = 'Unknown symbol'; tip.append(note);
            }
        }
        choice = {e, item, anchor};
        tip.hidden = false; if (!anchor) highlight();
        const r = anchor ? anchor.getBoundingClientRect() : e.rect();
        tip.style.left = `${Math.max(4, Math.min(r.left, innerWidth - tip.offsetWidth - 8))}px`;
        tip.style.top = `${Math.max(bar.hidden || overlay ? 4 : bar.offsetHeight, Math.min(r.bottom + 4, innerHeight - tip.offsetHeight - 8))}px`;
    }
    function refresh(target) {
        const e = editor(target), item = e && entry(e);
        if (item && active?.id === e.id && active.start === item.start) show(e, item);
        else cancel();
    }
    bar.addEventListener('mousedown', ev => {
        ev.preventDefault();
        const b = ev.target.closest('button');
        const opened = choice?.anchor === b;
        cancel();
        if (b?.classList.contains('ngn_x')) { bar.hidden = true; reflow(); }
        else if (b === toggle) {
            overlay = !overlay;
            try { localStorage.setItem('ngn_lb_overlay', overlay ? '1' : '0'); } catch {}
            reflow();
        } else if (b?.dataset.glyph && lastEditor) {
            const glyph = b.dataset.glyph, group = groups.get(glyph);
            if (group) {
                if (!opened) show(lastEditor, {query: glyph, found: group.map(g => [g, names.get(g)])}, b);
            } else lastEditor.insert(glyph);
        }
    });
    tip.addEventListener('mousedown', ev => {
        ev.preventDefault();
        const b = ev.target.closest('button');
        if (b && choice) choice.e.insert(b.dataset.glyph, choice.item.start);
        cancel();
    });
    d.addEventListener('focusin', ev => { lastEditor = editor(ev.target); cancel(); });
    d.addEventListener('pointerdown', ev => { if (!host.contains(ev.target)) cancel(); }, true);
    d.addEventListener('pointerup', ev => { if (!host.contains(ev.target)) lastEditor = editor(ev.target); });
    for (const event of ['paste', 'cut', 'compositionstart', 'focusout']) d.addEventListener(event, cancel, true);
    d.addEventListener('input', ev => {
        if (!keyInput || ev.inputType !== 'insertText' && ev.inputType !== 'deleteContentBackward') cancel();
        keyInput = false;
        requestAnimationFrame(() => { lastEditor = editor(ev.target); refresh(ev.target); });
    });
    window.addEventListener('blur', () => { leftAlt = rightAlt = false; cancel(); reset(); });
    window.addEventListener('focusin', reset, true);
    window.addEventListener('keyup', ev => {
        if (ev.code === 'AltLeft') leftAlt = false;
        if (ev.code === 'AltRight') rightAlt = false;
        keyInput = false; lastEditor = editor(ev.target); if (active) refresh(ev.target);
    }, true);
    window.addEventListener('keydown', ev => {
        if (ev.key === 'Escape' && choice?.anchor) {
            cancel(); ev.preventDefault(); ev.stopImmediatePropagation(); return;
        }
        keyInput = false;
        if (ev.code === 'AltLeft') leftAlt = true;
        if (ev.code === 'AltRight') rightAlt = true;
        if (['Shift', 'Control', 'Alt', 'Meta'].includes(ev.key)) return;
        const e = editor(ev.target);
        if (!e || ev.isComposing || ev.defaultPrevented) { cancel(); return; }
        lastEditor = e;
        const body = bplStart(e);
        const pressed = press(ev, leftAlt && !rightAlt && !ev.getModifierState('AltGraph') && body >= 0);
        if (pressed) {
            if (pressed.text) e.insert(pressed.text);
            if (pressed.stop) { cancel(); ev.preventDefault(); ev.stopImmediatePropagation(); return; }
        }
        const item = entry(e), plain = !ev.ctrlKey && !ev.altKey && !ev.metaKey;
        const tab = ev.key === 'Tab' && plain && !ev.shiftKey, enter = ev.key === 'Enter';
        const typed = active?.id === e.id && active.start === item?.start;
            if (typed && plain && !ev.shiftKey && !tip.hidden && !choice?.anchor &&
                ['ArrowUp', 'ArrowDown', 'Enter', 'Tab', 'Escape'].includes(ev.key)) {
                const buttons = [...tip.querySelectorAll('button')];
                if (ev.key === 'Escape') cancel();
                else if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown') {
                    if (buttons.length) picked = (picked + (ev.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length;
                    highlight(); buttons[picked]?.scrollIntoView({block:'nearest'});
                } else {
                    if (buttons.length) e.insert(buttons[picked].dataset.glyph, item.start);
                    cancel();
                }
                ev.preventDefault(); ev.stopImmediatePropagation(); return;
            }
        const delimiter = plain && ev.key.length === 1 && !/[a-z]/i.test(ev.key);
        if (item && (tab || typed && (enter || delimiter))) {
            if (item.found.length === 1) {
                e.insert(item.found[0][0], item.start);
                cancel();
            } else if (tab) {
                active = {id: e.id, start: item.start};
                show(e, item);
            }
            if (tab) { ev.preventDefault(); ev.stopImmediatePropagation(); return; }
        }
        if (ev.key === '`' && plain) {
            const updated = editor(ev.target), body = bplStart(updated);
            if (body >= 0 && updated.empty && inCode(updated.text.slice(body, updated.pos))) active = {id: updated.id, start: updated.pos};
            else cancel();
        } else if (!(typed && plain && (/^[a-z]$/i.test(ev.key) || ev.key === 'Backspace'))) cancel();
        keyInput = plain && (ev.key.length === 1 || ev.key === 'Backspace');
    }, true);
})
([{"glyph": "\u2190", "name": "left-arrow", "kind": "syntax", "monad": "assign", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u662f", "\u662f"], "shortcut": " h"}, {"glyph": "\u2395", "name": "quad", "kind": "syntax", "monad": "io", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u51fa\u5165", "\u51fa\u5165"], "shortcut": " q"}, {"glyph": "\u2022", "name": "bullet", "kind": "system", "monad": "system", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u7cfb", "\u7cfb"], "shortcut": " y"}, {"glyph": "\u237a", "name": "alpha", "kind": "argument", "monad": "left-argument", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u7532", "\u7532"], "shortcut": " a"}, {"glyph": "\u2375", "name": "omega", "kind": "argument", "monad": "right-argument", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u4e59", "\u4e59"], "shortcut": " w"}, {"glyph": "\u2376", "name": "alpha-underbar", "kind": "argument", "monad": "left-operand", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u4e19", "\u4e19"], "shortcut": " - a"}, {"glyph": "\u2379", "name": "omega-underbar", "kind": "argument", "monad": "right-operand", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u4e01", "\u4e01"], "shortcut": " - w"}, {"glyph": "\u2207", "name": "del", "kind": "argument", "monad": "recursion", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u9012", "\u905e"], "shortcut": " g"}, {"glyph": "\u2362", "name": "del-diaeresis", "kind": "argument", "monad": "operator-recursion", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u5faa", "\u5faa"], "shortcut": " 1 g"}, {"glyph": "\u235d", "name": "lamp", "kind": "comment", "monad": "comment", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u6ce8", "\u6ce8"], "shortcut": " o c"}, {"glyph": "\u22c4", "name": "diamond", "kind": "syntax", "monad": "separator", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u53e5", "\u53e5"], "shortcut": " `"}, {"glyph": "?", "name": "question", "kind": "syntax", "monad": "predicate", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u82e5", "\u82e5"], "shortcut": ""}, {"glyph": "\u00af", "name": "overbar", "kind": "literal", "monad": "negative", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u8d1f", "\u8ca0"], "shortcut": " -"}, {"glyph": "\u221e", "name": "infinity", "kind": "literal", "monad": "", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u6c38", "\u6c38"], "shortcut": " 8"}, {"glyph": "\u236c", "name": "zilde", "kind": "literal", "monad": "empty", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u7a7a", "\u7a7a"], "shortcut": " )"}, {"glyph": "+", "name": "plus", "kind": "function", "monad": "conjugate", "dyad": "add", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u52a0", "\u52a0"], "shortcut": ""}, {"glyph": "-", "name": "minus", "kind": "function", "monad": "negate", "dyad": "subtract", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u51cf", "\u6e1b"], "shortcut": ""}, {"glyph": "\u00d7", "name": "times", "kind": "function", "monad": "sign", "dyad": "multiply", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u4e58\u53f7", "\u4e58\u865f"], "shortcut": " m"}, {"glyph": "\u00f7", "name": "obelus", "kind": "function", "monad": "reciprocal", "dyad": "divide", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u9664", "\u9664"], "shortcut": " u"}, {"glyph": "\u2308", "name": "upstile", "kind": "function", "monad": "ceiling", "dyad": "maximum", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u4e0a", "\u4e0a"], "shortcut": " s"}, {"glyph": "\u230a", "name": "downstile", "kind": "function", "monad": "floor", "dyad": "minimum", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u4e0b", "\u4e0b"], "shortcut": " d"}, {"glyph": "|", "name": "stile", "kind": "function", "monad": "magnitude", "dyad": "residue", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u7edd\u4f59", "\u7d55\u9918"], "shortcut": ""}, {"glyph": "*", "name": "star", "kind": "function", "monad": "exponential", "dyad": "exponent", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u5e42", "\u51aa"], "shortcut": ""}, {"glyph": "\u235f", "name": "circle-star", "kind": "function", "monad": "natural-log", "dyad": "logarithm", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u5bf9", "\u5c0d"], "shortcut": " o 8"}, {"glyph": "\u25cb", "name": "circle", "kind": "function", "monad": "cis", "dyad": "circular", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u5706", "\u5713"], "shortcut": " o"}, {"glyph": "\u03c0", "name": "pi", "kind": "function", "monad": "pi-times", "dyad": "pi-ratio", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u5468", "\u5468"], "shortcut": " p"}, {"glyph": "\u221a", "name": "radical", "kind": "function", "monad": "sqrt", "dyad": "root", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u6839", "\u6839"], "shortcut": " 3"}, {"glyph": "!", "name": "exclamation", "kind": "function", "monad": "factorial", "dyad": "binomial", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u9636\u62e3", "\u968e\u63c0"], "shortcut": ""}, {"glyph": "\u2227", "name": "wedge", "kind": "function", "monad": "polar", "dyad": "and", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u6781\u4e14", "\u6975\u4e14"], "shortcut": " 0"}, {"glyph": "\u2228", "name": "vee", "kind": "function", "monad": "real-imag", "dyad": "or", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u6790\u6216", "\u6790\u6216"], "shortcut": " 9"}, {"glyph": "\u22bc", "name": "wedge-bar", "kind": "function", "monad": "square", "dyad": "nand", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u65b9\u5426", "\u65b9\u5426"], "shortcut": " - 0"}, {"glyph": "\u22bd", "name": "vee-bar", "kind": "function", "monad": "double", "dyad": "nor", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u53cc\u83ab", "\u96d9\u83ab"], "shortcut": " - 9"}, {"glyph": "~", "name": "tilde", "kind": "function", "monad": "not", "dyad": "without", "monad_rank": "0", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u975e\u65e0", "\u975e\u7121"], "shortcut": ""}, {"glyph": "=", "name": "equals", "kind": "function", "monad": "classify", "dyad": "equal", "monad_rank": "\u221e", "dyad_ranks": "0 0", "hanzi": ["\u7b49", "\u7b49"], "shortcut": ""}, {"glyph": "\u2260", "name": "not-equals", "kind": "function", "monad": "unique-mask", "dyad": "not-equal", "monad_rank": "\u221e", "dyad_ranks": "0 0", "hanzi": ["\u522b\u521d", "\u5225\u521d"], "shortcut": " +"}, {"glyph": "<", "name": "less-than", "kind": "function", "monad": "sort-up", "dyad": "less", "monad_rank": "\u221e", "dyad_ranks": "0 0", "hanzi": ["\u5c0f", "\u5c0f"], "shortcut": ""}, {"glyph": "\u2264", "name": "less-than-or-equal", "kind": "function", "monad": "decrement", "dyad": "less-equal", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u9650\u9000", "\u9650\u9000"], "shortcut": " <"}, {"glyph": ">", "name": "greater-than", "kind": "function", "monad": "sort-down", "dyad": "greater", "monad_rank": "\u221e", "dyad_ranks": "0 0", "hanzi": ["\u5927", "\u5927"], "shortcut": ""}, {"glyph": "\u2265", "name": "greater-than-or-equal", "kind": "function", "monad": "increment", "dyad": "greater-equal", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u8fbe\u8fdb", "\u9054\u9032"], "shortcut": " >"}, {"glyph": "\u2373", "name": "iota", "kind": "function", "monad": "indices", "dyad": "index-of", "monad_rank": "1", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u4f4d", "\u4f4d"], "shortcut": " i"}, {"glyph": "\u21a6", "name": "right-arrow-from-bar", "kind": "function", "monad": "range", "dyad": "to", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u81f3", "\u81f3"], "shortcut": " l"}, {"glyph": ":", "name": "colon", "kind": "function", "monad": "unkey", "dyad": "keyed", "monad_rank": "\u221e", "dyad_ranks": "1 \u221e", "hanzi": ["\u952e\u5378", "\u9375\u5378"], "shortcut": ""}, {"glyph": "\u2374", "name": "rho", "kind": "function", "monad": "shape", "dyad": "reshape", "monad_rank": "\u221e", "dyad_ranks": "1 \u221e", "hanzi": ["\u5f62", "\u5f62"], "shortcut": " r"}, {"glyph": "\u2262", "name": "equal-underbar-slash", "kind": "function", "monad": "tally", "dyad": "not-match", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u6570\u5f02", "\u6578\u7570"], "shortcut": " ?"}, {"glyph": "\u2261", "name": "equal-underbar", "kind": "function", "monad": "depth", "dyad": "match", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u540c\u6df1", "\u540c\u6df1"], "shortcut": " ="}, {"glyph": ",", "name": "comma", "kind": "function", "monad": "ravel", "dyad": "catenate", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u8fde", "\u9023"], "shortcut": ""}, {"glyph": "\u236a", "name": "comma-bar", "kind": "function", "monad": "table", "dyad": "catenate-first", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u63a5\u77e9", "\u63a5\u77e9"], "shortcut": " - ,"}, {"glyph": "\u2282", "name": "left-shoe", "kind": "function", "monad": "enclose", "dyad": "partitioned-enclose", "monad_rank": "\u221e", "dyad_ranks": "1 \u221e", "hanzi": ["\u5305", "\u5305"], "shortcut": " z"}, {"glyph": "\u2283", "name": "right-shoe", "kind": "function", "monad": "mix", "dyad": "pick", "monad_rank": "0", "dyad_ranks": "1 \u221e", "hanzi": ["\u9009\u5408", "\u9078\u5408"], "shortcut": " x"}, {"glyph": "\u2286", "name": "left-shoe-underbar", "kind": "function", "monad": "nest", "dyad": "partition", "monad_rank": "\u221e", "dyad_ranks": "1 \u221e", "hanzi": ["\u5de2\u6bb5", "\u5de2\u6bb5"], "shortcut": " - z"}, {"glyph": "\u220a", "name": "epsilon", "kind": "function", "monad": "enlist", "dyad": "member", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u5c5e\u5c55", "\u5c6c\u5c55"], "shortcut": " e"}, {"glyph": "\u222a", "name": "down-shoe", "kind": "function", "monad": "unique", "dyad": "union", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u5e76\u72ec", "\u4f75\u7368"], "shortcut": " v"}, {"glyph": "\u2229", "name": "up-shoe", "kind": "function", "monad": "duplicates", "dyad": "intersection", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u4ea4\u91cd", "\u4ea4\u91cd"], "shortcut": " c"}, {"glyph": "\u234b", "name": "delta-stile", "kind": "function", "monad": "grade-up", "dyad": "grade-up-by", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u5347", "\u5347"], "shortcut": " \\ 7"}, {"glyph": "\u2352", "name": "del-stile", "kind": "function", "monad": "grade-down", "dyad": "grade-down-by", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u964d", "\u964d"], "shortcut": " \\ g"}, {"glyph": "\u2191", "name": "up-arrow", "kind": "function", "monad": "first", "dyad": "take", "monad_rank": "\u221e", "dyad_ranks": "1 \u221e", "hanzi": ["\u53d6", "\u53d6"], "shortcut": " k"}, {"glyph": "\u2193", "name": "down-arrow", "kind": "function", "monad": "split", "dyad": "drop", "monad_rank": "1", "dyad_ranks": "1 \u221e", "hanzi": ["\u53bb\u62c6", "\u53bb\u62c6"], "shortcut": " j"}, {"glyph": "\u233d", "name": "circle-stile", "kind": "function", "monad": "reverse", "dyad": "rotate", "monad_rank": "1", "dyad_ranks": "0 1", "hanzi": ["\u8f6c", "\u8f49"], "shortcut": " 2"}, {"glyph": "\u2296", "name": "circle-bar", "kind": "function", "monad": "reverse-first", "dyad": "rotate-first", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u7eb5", "\u7e31"], "shortcut": " o -"}, {"glyph": "\u2349", "name": "circle-backslash", "kind": "function", "monad": "transpose", "dyad": "reorder-axes", "monad_rank": "\u221e", "dyad_ranks": "1 \u221e", "hanzi": ["\u7ffb", "\u7ffb"], "shortcut": " o \\"}, {"glyph": "\u22a4", "name": "down-tack", "kind": "function", "monad": "binary-encode", "dyad": "encode", "monad_rank": "\u221e", "dyad_ranks": "1 0", "hanzi": ["\u7f16", "\u7de8"], "shortcut": " n"}, {"glyph": "\u22a5", "name": "up-tack", "kind": "function", "monad": "binary-decode", "dyad": "decode", "monad_rank": "1", "dyad_ranks": "1 1", "hanzi": ["\u8bd1", "\u8b6f"], "shortcut": " b"}, {"glyph": "\u234e", "name": "hydrant", "kind": "function", "monad": "execute", "dyad": "execute-in", "monad_rank": "1", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u884c", "\u884c"], "shortcut": " o b"}, {"glyph": "\u2355", "name": "thorn", "kind": "function", "monad": "format", "dyad": "format-spec", "monad_rank": "\u221e", "dyad_ranks": "1 \u221e", "hanzi": ["\u6587", "\u6587"], "shortcut": " o n"}, {"glyph": "\u2337", "name": "squad", "kind": "function", "monad": "materialise", "dyad": "index", "monad_rank": "\u221e", "dyad_ranks": "1 \u221e", "hanzi": ["\u7d22", "\u7d22"], "shortcut": " q \\"}, {"glyph": "\u2339", "name": "domino", "kind": "function", "monad": "matrix-inverse", "dyad": "matrix-divide", "monad_rank": "2", "dyad_ranks": "\u221e 2", "hanzi": ["\u89e3\u9006", "\u89e3\u9006"], "shortcut": " q u"}, {"glyph": "#", "name": "hash", "kind": "function", "monad": "runs", "dyad": "replicate", "monad_rank": "\u221e", "dyad_ranks": "1 \u221e", "hanzi": ["\u590d", "\u8907"], "shortcut": ""}, {"glyph": "\u2195", "name": "up-down-arrow", "kind": "function", "monad": "pairs", "dyad": "windows", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u7a97", "\u7a97"], "shortcut": " K"}, {"glyph": "\u236d", "name": "stile-tilde", "kind": "function", "monad": "prime", "dyad": "prime-mode", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u7d20", "\u7d20"], "shortcut": " \\"}, {"glyph": "\u2a38", "name": "circle-divide", "kind": "function", "monad": "factors", "dyad": "factor-spec", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u56e0", "\u56e0"], "shortcut": " o u"}, {"glyph": "\u233b", "name": "quad-jot", "kind": "function", "monad": "roots", "dyad": "polyval", "monad_rank": "1", "dyad_ranks": "1 0", "hanzi": ["\u96f6\u503c", "\u96f6\u503c"], "shortcut": " q t"}, {"glyph": "\u2378", "name": "iota-underbar", "kind": "function", "monad": "where", "dyad": "interval-index", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u5904\u95f4", "\u8655\u9593"], "shortcut": " - i"}, {"glyph": "\u2377", "name": "epsilon-underbar", "kind": "function", "monad": "groups", "dyad": "find", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u5bfb\u7fa4", "\u5c0b\u7fa4"], "shortcut": " - e"}, {"glyph": "\u22a2", "name": "right-tack", "kind": "function", "monad": "same", "dyad": "right", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u53f3", "\u53f3"], "shortcut": " '"}, {"glyph": "\u22a3", "name": "left-tack", "kind": "function", "monad": "same-left", "dyad": "left", "monad_rank": "\u221e", "dyad_ranks": "\u221e \u221e", "hanzi": ["\u5de6", "\u5de6"], "shortcut": " ;"}, {"glyph": "\u00bf", "name": "inverted-question", "kind": "function", "monad": "roll", "dyad": "deal", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["\u63b7\u62bd", "\u64f2\u62bd"], "shortcut": " /"}, {"glyph": "\u00a8", "name": "diaeresis", "kind": "monadic-operator", "monad": "each", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u904d", "\u904d"], "shortcut": " 1"}, {"glyph": "\u1d47", "name": "superscript-b", "kind": "monadic-operator", "monad": "bitwise", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u6309", "\u6309"], "shortcut": " 6 b"}, {"glyph": "\u2368", "name": "tilde-diaeresis", "kind": "monadic-operator", "monad": "self", "dyad": "commute", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u5df1\u6362", "\u5df1\u63db"], "shortcut": " 1 `"}, {"glyph": "\u21a3", "name": "right-tail-arrow", "kind": "dyadic-operator", "monad": "before", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u5148", "\u5148"], "shortcut": " ."}, {"glyph": "\u2364", "name": "jot-diaeresis", "kind": "dyadic-operator", "monad": "rank", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u79e9", "\u79e9"], "shortcut": " 1 t"}, {"glyph": "\u2218", "name": "jot", "kind": "dyadic-operator", "monad": "atop", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u627f", "\u627f"], "shortcut": " t"}, {"glyph": "\u2360", "name": "quad-colon", "kind": "dyadic-operator", "monad": "axis", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u8f74", "\u8ef8"], "shortcut": " q ;"}, {"glyph": "\u2365", "name": "circle-diaeresis", "kind": "dyadic-operator", "monad": "over", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u7ecf", "\u7d93"], "shortcut": " 1 o"}, {"glyph": "\u21a2", "name": "left-tail-arrow", "kind": "dyadic-operator", "monad": "after", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u540e", "\u5f8c"], "shortcut": " ,"}, {"glyph": ".", "name": "dot", "kind": "dyadic-operator", "monad": "determinant", "dyad": "inner-product", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u5185", "\u5167"], "shortcut": ""}, {"glyph": "\u2297", "name": "circle-times", "kind": "monadic-operator", "monad": "outer-product", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u8868", "\u8868"], "shortcut": " o m"}, {"glyph": "\u2338", "name": "quad-equal", "kind": "monadic-operator", "monad": "key", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u7ec4", "\u7d44"], "shortcut": " q ="}, {"glyph": "\u2363", "name": "star-diaeresis", "kind": "dyadic-operator", "monad": "power", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u6b21\u6b62", "\u6b21\u6b62"], "shortcut": " 1 8"}, {"glyph": "\u21c4", "name": "right-left-arrows", "kind": "monadic-operator", "monad": "optimize", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u4f18", "\u512a"], "shortcut": " 4"}, {"glyph": "\u2298", "name": "circle-slash", "kind": "dyadic-operator", "monad": "valences", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u517c", "\u517c"], "shortcut": " o /"}, {"glyph": "@", "name": "at", "kind": "dyadic-operator", "monad": "under", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u4e8e", "\u65bc"], "shortcut": ""}, {"glyph": "\u2202", "name": "partial", "kind": "monadic-operator", "monad": "derivative", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u5bfc\u68af", "\u5c0e\u68af"], "shortcut": " f"}, {"glyph": "\u235a", "name": "diamond-underbar", "kind": "dyadic-operator", "monad": "agenda", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u62e9", "\u64c7"], "shortcut": " - `"}, {"glyph": "\u233a", "name": "quad-diamond", "kind": "dyadic-operator", "monad": "stencil", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u90bb", "\u9130"], "shortcut": " q `"}, {"glyph": "/", "name": "slash", "kind": "monadic-operator", "monad": "reduce", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u603b", "\u7e3d"], "shortcut": ""}, {"glyph": "\u233f", "name": "slash-bar", "kind": "monadic-operator", "monad": "reduce-first", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u6c47", "\u532f"], "shortcut": " - /"}, {"glyph": "\\", "name": "backslash", "kind": "monadic-operator", "monad": "scan", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u7d2f", "\u7d2f"], "shortcut": ""}, {"glyph": "\u2340", "name": "backslash-bar", "kind": "monadic-operator", "monad": "scan-first", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["\u7eed", "\u7e8c"], "shortcut": " - \\"}], ((symbols, layout) => {
    const comments = new Set(symbols.filter(s => s.kind === 'comment').flatMap(s => [...s.glyph, ...s.hanzi.join('')]));
    // US physical keys, before macOS Option or another layout transforms event.key.
    const punctuation = {Backquote: '`~', Minus: '-_', Equal: '=+', BracketLeft: '[{', BracketRight: ']}',
        Backslash: '\\|', Semicolon: ';:', Quote: "'\"", Comma: ',<', Period: '.>', Slash: '/?'};
    function usKey({code, shiftKey}) {
        if (/^Key[A-Z]$/.test(code)) return shiftKey ? code.slice(3) : code.slice(3).toLowerCase();
        if (/^Digit[0-9]$/.test(code)) return shiftKey ? ')!@#$%^&*('[Number(code[5])] : code[5];
        return punctuation[code]?.[Number(shiftKey)];
    }

    // Composed input from `layout.json`, with the same rules as the REPL and the macOS layout. `pending` is the dead-key state
    // that the next key completes.
    let pending = null;
    const act = action => typeof action === 'string' ? (pending = null, action) : (pending = action.state, '');
    // What a key types: `{text, stop}`, where `stop` means the key itself does nothing more, or nothing for an ordinary key.
    // `option` is whether an Option chord counts here.
    function press(ev, option) {
        const key = usKey(ev), plain = !ev.altKey && !ev.ctrlKey && !ev.metaKey;
        // Native Option can hide the alias character; accept its US physical chord too.
        const action = option && ev.altKey && !ev.ctrlKey && !ev.metaKey
            ? layout.alt_aliases[ev.key] ?? (Object.values(layout.alt_aliases).includes(key) ? key : layout.option[key]) : null;
        if (pending) {
            const state = layout.states[pending], repeated = action?.state === pending;
            pending = null;
            if (repeated) return {text: state.terminator, stop: true};
            if (plain && ev.key === ' ') return {text: state.terminator, stop: true};
            if (ev.key === 'Backspace' || ev.key === 'Escape') return {text: '', stop: true};
            if (plain && key in state.keys) return {text: act(state.keys[key]), stop: true};
            // Any other key types the terminator, then acts as if nothing were pending.
            const rest = press(ev, option);
            return {text: state.terminator + (rest?.text ?? ''), stop: rest?.stop ?? false};
        }
        if (action) return {text: act(action), stop: true};
    }
    const reset = () => { pending = null; };

    // Every name ranks alike at each level: exact, prefix, then prefixes of hyphen-separated parts. Each match carries the name it
    // matched by, the glyph name where several of a glyph's names match equally, as in `matches` in `symbols.rs`.
    function matches(query) {
        query = query.toLowerCase();
        const letters = word => word.replaceAll('-', '');
        let best = Infinity, found = [];
        for (const {glyph, name, monad, dyad} of symbols) {
            let rank = Infinity, matched;
            [name, monad, dyad].filter(Boolean).forEach(word => {
                const level = letters(word) === query ? 0 : letters(word).startsWith(query) ? 1 : 2;
                if (level === 2) {
                    let rest = query;
                    for (const part of word.split('-')) {
                        let n = 0;
                        while (n < part.length && part[n] === rest[n]) n++;
                        if (!n) break;
                        rest = rest.slice(n);
                        if (!rest) break;
                    }
                    if (rest) return;
                }
                if (level < rank) { rank = level; matched = word; }
            });
            if (rank < best) { best = rank; found = []; }
            if (rank < Infinity && rank === best) found.push([glyph, matched]);
        }
        // A name that is a prefix of every other match wins: `om gives omega, `omu gives omega-underbar.
        const shortest = found.find(([, a]) => found.every(([, b]) => letters(b).startsWith(letters(a))));
        return shortest && found.length > 1 ? [shortest] : found;
    }

    function inCode(text, python = false) {
        let quote = '', comment = false;
        for (let i = 0; i < text.length; i++) {
            const c = text[i];
            if (comment) { if (c === '\n') comment = false; }
            else if (quote) {
                if (python && c === '\\') i++;
                else if (text.startsWith(quote, i)) { i += quote.length - 1; quote = ''; }
            } else if (c === "'" && !python) {
                if (text.startsWith("''", i) && !text.startsWith("'''", i)) i++;
                else {
                    if (i + 2 >= text.length) return false;
                    i += 2;
                }
            } else if (c === "'" || c === '"') {
                quote = python && text.startsWith(c.repeat(3), i) ? c.repeat(3) : c;
                i += quote.length - 1;
            } else if (python ? c === '#' : comments.has(c)) comment = true;
        }
        return !quote && !comment;
    }

    function bplStart(e) {
        if (e.bpl) return 0;
        const header = /^%%(?:bpl|apl)(?:[ \t]+--animate)?[^\S\n]*(?:\r?\n|$)/.exec(e.text);
        if (header) return e.pos >= header[0].length ? header[0].length : -1;
        const start = e.text.lastIndexOf('\n', e.pos - 1) + 1;
        const line = /^[ \t]*(?:[\p{ID_Start}_][\p{ID_Continue}]*[ \t]*=[ \t]*)?%bpl[ \t]+/u.exec(e.text.slice(start, e.pos));
        return line && inCode(e.text.slice(0, start), true) ? start + line[0].length : -1;
    }

    function entry(e) {
        const body = bplStart(e), start = e.text.lastIndexOf('`', e.pos - 1);
        if (body < 0 || start < body || !e.empty || !inCode(e.text.slice(body, start))) return;
        const query = e.text.slice(start + 1, e.pos);
        if (/^[a-z]*$/i.test(query)) return {start, query, found: matches(query)};
    }

    return {matches, inCode, bplStart, entry, press, reset};
})
, {
 "alt_aliases": {"£": "#"},
 "unshifted": {"*": "8", "~": "`", "_": "-", "|": "\\", ":": ";"},
 "optional_shift": {"!": "1", "@": "2", "#": "3", "$": "4", "%": "5", "^": "6", "&": "7", "*": "8", "(": "9", "_": "-"},
 "option": {
  "`": "⋄",
  "1": {"state": "diaeresis"},
  "2": "⌽",
  "3": "√",
  "4": "⇄",
  "5": {"state": "subscript"},
  "6": {"state": "superscript"},
  "7": "∆",
  "8": "∞",
  "9": "∨",
  "0": "∧",
  ")": "⍬",
  "!": "¹",
  "@": "²",
  "#": "³",
  "$": "⁴",
  "%": "⁵",
  "^": "⁶",
  "&": "⁷",
  "*": "⁸",
  "(": "⁹",
  "_": "⁻",
  "-": {"state": "bar"},
  "=": "≡",
  "q": {"state": "quad"},
  "w": "⍵",
  "e": "∊",
  "r": "⍴",
  "t": "∘",
  "y": "•",
  "u": "÷",
  "i": "⍳",
  "o": {"state": "circle"},
  "p": "π",
  "+": "≠",
  "\\": {"state": "stile"},
  "a": "⍺",
  "s": "⌈",
  "d": "⌊",
  "f": "∂",
  "g": "∇",
  "h": "←",
  "j": "↓",
  "k": "↑",
  "K": "↕",
  "l": "↦",
  ";": "⊣",
  "'": "⊢",
  "z": "⊂",
  "x": "⊃",
  "c": "∩",
  "v": "∪",
  "b": "⊥",
  "n": "⊤",
  "m": "×",
  ",": "↢",
  ".": "↣",
  "<": "≤",
  ">": "≥",
  "/": "¿",
  "?": "≢"
 },
 "states": {
  "diaeresis": {"terminator": "¨", "keys": {"t": "⍤", "o": "⍥", "*": "⍣", "~": "⍨", "g": "⍢", "8": "⍣", "`": "⍨"}},
  "superscript": {"terminator": "^", "keys": {"0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": {"state": "superscript-minus"}, "b": "ᵇ", "t": "ᵀ", "u": "ᵘ"}},
  "superscript-minus": {"terminator": "⁻", "keys": {"0": "⁻⁰", "1": "⁻¹", "2": "⁻²", "3": "⁻³", "4": "⁻⁴", "5": "⁻⁵", "6": "⁻⁶", "7": "⁻⁷", "8": "⁻⁸", "9": "⁻⁹"}},
  "subscript": {"terminator": "_", "keys": {"0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉", "x": "ₓ", "j": "ⱼ", "e": "ₑ", "r": "ᵣ", "-": {"state": "subscript-minus"}}},
  "subscript-minus": {"terminator": "₋", "keys": {"0": "₋₀", "1": "₋₁", "2": "₋₂", "3": "₋₃", "4": "₋₄", "5": "₋₅", "6": "₋₆", "7": "₋₇", "8": "₋₈", "9": "₋₉"}},
  "bar": {"terminator": "¯", "keys": {",": "⍪", "\\": "⍀", "/": "⌿", "a": "⍶", "w": "⍹", "7": "⍙", "`": "⍚", "0": "⊼", "9": "⊽", "e": "⍷", "i": "⍸", "z": "⊆"}},
  "quad": {"terminator": "⎕", "keys": {"t": "⌻", ":": "⍠", "=": "⌸", "u": "⌹", "|": "⌷", "`": "⌺", ";": "⍠", "\\": "⌷"}},
  "circle": {"terminator": "○", "keys": {"-": "⊖", "\\": "⍉", "/": "⊘", "*": "⍟", "m": "⊗", "u": "⨸", "8": "⍟", "c": "⍝", "b": "⍎", "n": "⍕"}},
  "stile": {"terminator": "⍭", "keys": {"7": "⍋", "g": "⍒"}}
 }
}
)
;
(()=>{
    const bar=document.querySelector('.ngn_lb'); if(bar) bar.hidden=false;
    let button=document.getElementById('bpl-symbol-toggle');
    if(!button){
        button=document.createElement('button'); button.id='bpl-symbol-toggle';
        button.type='button'; button.textContent='BPL';
        button.title='Show or hide BPL symbols';
        button.className='uk-btn uk-btn-sm uk-btn-default cursor-pointer';
        document.getElementById('settings').before(button);
    }
    button.setAttribute('aria-pressed',String(bar && !bar.hidden));
    button.onclick=()=>{
        const current=document.querySelector('.ngn_lb');
        if(current){current.hidden=!current.hidden;button.setAttribute('aria-pressed',String(!current.hidden));}
    };
    })();
;
((symbols,layout,examples)=>window.bplCraftPalette(window.bplCraftCatalogue(symbols,layout),examples))([{"glyph": "←", "name": "left-arrow", "kind": "syntax", "monad": "assign", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["是", "是"], "shortcut": " h"}, {"glyph": "⎕", "name": "quad", "kind": "syntax", "monad": "io", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["出入", "出入"], "shortcut": " q"}, {"glyph": "•", "name": "bullet", "kind": "system", "monad": "system", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["系", "系"], "shortcut": " y"}, {"glyph": "⍺", "name": "alpha", "kind": "argument", "monad": "left-argument", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["甲", "甲"], "shortcut": " a"}, {"glyph": "⍵", "name": "omega", "kind": "argument", "monad": "right-argument", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["乙", "乙"], "shortcut": " w"}, {"glyph": "⍶", "name": "alpha-underbar", "kind": "argument", "monad": "left-operand", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["丙", "丙"], "shortcut": " - a"}, {"glyph": "⍹", "name": "omega-underbar", "kind": "argument", "monad": "right-operand", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["丁", "丁"], "shortcut": " - w"}, {"glyph": "∇", "name": "del", "kind": "argument", "monad": "recursion", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["递", "遞"], "shortcut": " g"}, {"glyph": "⍢", "name": "del-diaeresis", "kind": "argument", "monad": "operator-recursion", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["循", "循"], "shortcut": " 1 g"}, {"glyph": "⍝", "name": "lamp", "kind": "comment", "monad": "comment", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["注", "注"], "shortcut": " o c"}, {"glyph": "⋄", "name": "diamond", "kind": "syntax", "monad": "separator", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["句", "句"], "shortcut": " `"}, {"glyph": "?", "name": "question", "kind": "syntax", "monad": "predicate", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["若", "若"], "shortcut": ""}, {"glyph": "¯", "name": "overbar", "kind": "literal", "monad": "negative", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["负", "負"], "shortcut": " -"}, {"glyph": "∞", "name": "infinity", "kind": "literal", "monad": "", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["永", "永"], "shortcut": " 8"}, {"glyph": "⍬", "name": "zilde", "kind": "literal", "monad": "empty", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["空", "空"], "shortcut": " )"}, {"glyph": "+", "name": "plus", "kind": "function", "monad": "conjugate", "dyad": "add", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["加", "加"], "shortcut": ""}, {"glyph": "-", "name": "minus", "kind": "function", "monad": "negate", "dyad": "subtract", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["减", "減"], "shortcut": ""}, {"glyph": "×", "name": "times", "kind": "function", "monad": "sign", "dyad": "multiply", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["乘号", "乘號"], "shortcut": " m"}, {"glyph": "÷", "name": "obelus", "kind": "function", "monad": "reciprocal", "dyad": "divide", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["除", "除"], "shortcut": " u"}, {"glyph": "⌈", "name": "upstile", "kind": "function", "monad": "ceiling", "dyad": "maximum", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["上", "上"], "shortcut": " s"}, {"glyph": "⌊", "name": "downstile", "kind": "function", "monad": "floor", "dyad": "minimum", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["下", "下"], "shortcut": " d"}, {"glyph": "|", "name": "stile", "kind": "function", "monad": "magnitude", "dyad": "residue", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["绝余", "絕餘"], "shortcut": ""}, {"glyph": "*", "name": "star", "kind": "function", "monad": "exponential", "dyad": "exponent", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["幂", "冪"], "shortcut": ""}, {"glyph": "⍟", "name": "circle-star", "kind": "function", "monad": "natural-log", "dyad": "logarithm", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["对", "對"], "shortcut": " o 8"}, {"glyph": "○", "name": "circle", "kind": "function", "monad": "cis", "dyad": "circular", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["圆", "圓"], "shortcut": " o"}, {"glyph": "π", "name": "pi", "kind": "function", "monad": "pi-times", "dyad": "pi-ratio", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["周", "周"], "shortcut": " p"}, {"glyph": "√", "name": "radical", "kind": "function", "monad": "sqrt", "dyad": "root", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["根", "根"], "shortcut": " 3"}, {"glyph": "!", "name": "exclamation", "kind": "function", "monad": "factorial", "dyad": "binomial", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["阶拣", "階揀"], "shortcut": ""}, {"glyph": "∧", "name": "wedge", "kind": "function", "monad": "polar", "dyad": "and", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["极且", "極且"], "shortcut": " 0"}, {"glyph": "∨", "name": "vee", "kind": "function", "monad": "real-imag", "dyad": "or", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["析或", "析或"], "shortcut": " 9"}, {"glyph": "⊼", "name": "wedge-bar", "kind": "function", "monad": "square", "dyad": "nand", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["方否", "方否"], "shortcut": " - 0"}, {"glyph": "⊽", "name": "vee-bar", "kind": "function", "monad": "double", "dyad": "nor", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["双莫", "雙莫"], "shortcut": " - 9"}, {"glyph": "~", "name": "tilde", "kind": "function", "monad": "not", "dyad": "without", "monad_rank": "0", "dyad_ranks": "∞ ∞", "hanzi": ["非无", "非無"], "shortcut": ""}, {"glyph": "=", "name": "equals", "kind": "function", "monad": "classify", "dyad": "equal", "monad_rank": "∞", "dyad_ranks": "0 0", "hanzi": ["等", "等"], "shortcut": ""}, {"glyph": "≠", "name": "not-equals", "kind": "function", "monad": "unique-mask", "dyad": "not-equal", "monad_rank": "∞", "dyad_ranks": "0 0", "hanzi": ["别初", "別初"], "shortcut": " +"}, {"glyph": "<", "name": "less-than", "kind": "function", "monad": "sort-up", "dyad": "less", "monad_rank": "∞", "dyad_ranks": "0 0", "hanzi": ["小", "小"], "shortcut": ""}, {"glyph": "≤", "name": "less-than-or-equal", "kind": "function", "monad": "decrement", "dyad": "less-equal", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["限退", "限退"], "shortcut": " <"}, {"glyph": ">", "name": "greater-than", "kind": "function", "monad": "sort-down", "dyad": "greater", "monad_rank": "∞", "dyad_ranks": "0 0", "hanzi": ["大", "大"], "shortcut": ""}, {"glyph": "≥", "name": "greater-than-or-equal", "kind": "function", "monad": "increment", "dyad": "greater-equal", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["达进", "達進"], "shortcut": " >"}, {"glyph": "⍳", "name": "iota", "kind": "function", "monad": "indices", "dyad": "index-of", "monad_rank": "1", "dyad_ranks": "∞ ∞", "hanzi": ["位", "位"], "shortcut": " i"}, {"glyph": "↦", "name": "right-arrow-from-bar", "kind": "function", "monad": "range", "dyad": "to", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["至", "至"], "shortcut": " l"}, {"glyph": ":", "name": "colon", "kind": "function", "monad": "unkey", "dyad": "keyed", "monad_rank": "∞", "dyad_ranks": "1 ∞", "hanzi": ["键卸", "鍵卸"], "shortcut": ""}, {"glyph": "⍴", "name": "rho", "kind": "function", "monad": "shape", "dyad": "reshape", "monad_rank": "∞", "dyad_ranks": "1 ∞", "hanzi": ["形", "形"], "shortcut": " r"}, {"glyph": "≢", "name": "equal-underbar-slash", "kind": "function", "monad": "tally", "dyad": "not-match", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["数异", "數異"], "shortcut": " ?"}, {"glyph": "≡", "name": "equal-underbar", "kind": "function", "monad": "depth", "dyad": "match", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["同深", "同深"], "shortcut": " ="}, {"glyph": ",", "name": "comma", "kind": "function", "monad": "ravel", "dyad": "catenate", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["连", "連"], "shortcut": ""}, {"glyph": "⍪", "name": "comma-bar", "kind": "function", "monad": "table", "dyad": "catenate-first", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["接矩", "接矩"], "shortcut": " - ,"}, {"glyph": "⊂", "name": "left-shoe", "kind": "function", "monad": "enclose", "dyad": "partitioned-enclose", "monad_rank": "∞", "dyad_ranks": "1 ∞", "hanzi": ["包", "包"], "shortcut": " z"}, {"glyph": "⊃", "name": "right-shoe", "kind": "function", "monad": "mix", "dyad": "pick", "monad_rank": "0", "dyad_ranks": "1 ∞", "hanzi": ["选合", "選合"], "shortcut": " x"}, {"glyph": "⊆", "name": "left-shoe-underbar", "kind": "function", "monad": "nest", "dyad": "partition", "monad_rank": "∞", "dyad_ranks": "1 ∞", "hanzi": ["巢段", "巢段"], "shortcut": " - z"}, {"glyph": "∊", "name": "epsilon", "kind": "function", "monad": "enlist", "dyad": "member", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["属展", "屬展"], "shortcut": " e"}, {"glyph": "∪", "name": "down-shoe", "kind": "function", "monad": "unique", "dyad": "union", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["并独", "併獨"], "shortcut": " v"}, {"glyph": "∩", "name": "up-shoe", "kind": "function", "monad": "duplicates", "dyad": "intersection", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["交重", "交重"], "shortcut": " c"}, {"glyph": "⍋", "name": "delta-stile", "kind": "function", "monad": "grade-up", "dyad": "grade-up-by", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["升", "升"], "shortcut": " \\ 7"}, {"glyph": "⍒", "name": "del-stile", "kind": "function", "monad": "grade-down", "dyad": "grade-down-by", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["降", "降"], "shortcut": " \\ g"}, {"glyph": "↑", "name": "up-arrow", "kind": "function", "monad": "first", "dyad": "take", "monad_rank": "∞", "dyad_ranks": "1 ∞", "hanzi": ["取", "取"], "shortcut": " k"}, {"glyph": "↓", "name": "down-arrow", "kind": "function", "monad": "split", "dyad": "drop", "monad_rank": "1", "dyad_ranks": "1 ∞", "hanzi": ["去拆", "去拆"], "shortcut": " j"}, {"glyph": "⌽", "name": "circle-stile", "kind": "function", "monad": "reverse", "dyad": "rotate", "monad_rank": "1", "dyad_ranks": "0 1", "hanzi": ["转", "轉"], "shortcut": " 2"}, {"glyph": "⊖", "name": "circle-bar", "kind": "function", "monad": "reverse-first", "dyad": "rotate-first", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["纵", "縱"], "shortcut": " o -"}, {"glyph": "⍉", "name": "circle-backslash", "kind": "function", "monad": "transpose", "dyad": "reorder-axes", "monad_rank": "∞", "dyad_ranks": "1 ∞", "hanzi": ["翻", "翻"], "shortcut": " o \\"}, {"glyph": "⊤", "name": "down-tack", "kind": "function", "monad": "binary-encode", "dyad": "encode", "monad_rank": "∞", "dyad_ranks": "1 0", "hanzi": ["编", "編"], "shortcut": " n"}, {"glyph": "⊥", "name": "up-tack", "kind": "function", "monad": "binary-decode", "dyad": "decode", "monad_rank": "1", "dyad_ranks": "1 1", "hanzi": ["译", "譯"], "shortcut": " b"}, {"glyph": "⍎", "name": "hydrant", "kind": "function", "monad": "execute", "dyad": "execute-in", "monad_rank": "1", "dyad_ranks": "∞ ∞", "hanzi": ["行", "行"], "shortcut": " o b"}, {"glyph": "⍕", "name": "thorn", "kind": "function", "monad": "format", "dyad": "format-spec", "monad_rank": "∞", "dyad_ranks": "1 ∞", "hanzi": ["文", "文"], "shortcut": " o n"}, {"glyph": "⌷", "name": "squad", "kind": "function", "monad": "materialise", "dyad": "index", "monad_rank": "∞", "dyad_ranks": "1 ∞", "hanzi": ["索", "索"], "shortcut": " q \\"}, {"glyph": "⌹", "name": "domino", "kind": "function", "monad": "matrix-inverse", "dyad": "matrix-divide", "monad_rank": "2", "dyad_ranks": "∞ 2", "hanzi": ["解逆", "解逆"], "shortcut": " q u"}, {"glyph": "#", "name": "hash", "kind": "function", "monad": "runs", "dyad": "replicate", "monad_rank": "∞", "dyad_ranks": "1 ∞", "hanzi": ["复", "複"], "shortcut": ""}, {"glyph": "↕", "name": "up-down-arrow", "kind": "function", "monad": "pairs", "dyad": "windows", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["窗", "窗"], "shortcut": " K"}, {"glyph": "⍭", "name": "stile-tilde", "kind": "function", "monad": "prime", "dyad": "prime-mode", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["素", "素"], "shortcut": " \\"}, {"glyph": "⨸", "name": "circle-divide", "kind": "function", "monad": "factors", "dyad": "factor-spec", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["因", "因"], "shortcut": " o u"}, {"glyph": "⌻", "name": "quad-jot", "kind": "function", "monad": "roots", "dyad": "polyval", "monad_rank": "1", "dyad_ranks": "1 0", "hanzi": ["零值", "零值"], "shortcut": " q t"}, {"glyph": "⍸", "name": "iota-underbar", "kind": "function", "monad": "where", "dyad": "interval-index", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["处间", "處間"], "shortcut": " - i"}, {"glyph": "⍷", "name": "epsilon-underbar", "kind": "function", "monad": "groups", "dyad": "find", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["寻群", "尋群"], "shortcut": " - e"}, {"glyph": "⊢", "name": "right-tack", "kind": "function", "monad": "same", "dyad": "right", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["右", "右"], "shortcut": " '"}, {"glyph": "⊣", "name": "left-tack", "kind": "function", "monad": "same-left", "dyad": "left", "monad_rank": "∞", "dyad_ranks": "∞ ∞", "hanzi": ["左", "左"], "shortcut": " ;"}, {"glyph": "¿", "name": "inverted-question", "kind": "function", "monad": "roll", "dyad": "deal", "monad_rank": "0", "dyad_ranks": "0 0", "hanzi": ["掷抽", "擲抽"], "shortcut": " /"}, {"glyph": "¨", "name": "diaeresis", "kind": "monadic-operator", "monad": "each", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["遍", "遍"], "shortcut": " 1"}, {"glyph": "ᵇ", "name": "superscript-b", "kind": "monadic-operator", "monad": "bitwise", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["按", "按"], "shortcut": " 6 b"}, {"glyph": "⍨", "name": "tilde-diaeresis", "kind": "monadic-operator", "monad": "self", "dyad": "commute", "monad_rank": "", "dyad_ranks": "", "hanzi": ["己换", "己換"], "shortcut": " 1 `"}, {"glyph": "↣", "name": "right-tail-arrow", "kind": "dyadic-operator", "monad": "before", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["先", "先"], "shortcut": " ."}, {"glyph": "⍤", "name": "jot-diaeresis", "kind": "dyadic-operator", "monad": "rank", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["秩", "秩"], "shortcut": " 1 t"}, {"glyph": "∘", "name": "jot", "kind": "dyadic-operator", "monad": "atop", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["承", "承"], "shortcut": " t"}, {"glyph": "⍠", "name": "quad-colon", "kind": "dyadic-operator", "monad": "axis", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["轴", "軸"], "shortcut": " q ;"}, {"glyph": "⍥", "name": "circle-diaeresis", "kind": "dyadic-operator", "monad": "over", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["经", "經"], "shortcut": " 1 o"}, {"glyph": "↢", "name": "left-tail-arrow", "kind": "dyadic-operator", "monad": "after", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["后", "後"], "shortcut": " ,"}, {"glyph": ".", "name": "dot", "kind": "dyadic-operator", "monad": "determinant", "dyad": "inner-product", "monad_rank": "", "dyad_ranks": "", "hanzi": ["内", "內"], "shortcut": ""}, {"glyph": "⊗", "name": "circle-times", "kind": "monadic-operator", "monad": "outer-product", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["表", "表"], "shortcut": " o m"}, {"glyph": "⌸", "name": "quad-equal", "kind": "monadic-operator", "monad": "key", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["组", "組"], "shortcut": " q ="}, {"glyph": "⍣", "name": "star-diaeresis", "kind": "dyadic-operator", "monad": "power", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["次止", "次止"], "shortcut": " 1 8"}, {"glyph": "⇄", "name": "right-left-arrows", "kind": "monadic-operator", "monad": "optimize", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["优", "優"], "shortcut": " 4"}, {"glyph": "⊘", "name": "circle-slash", "kind": "dyadic-operator", "monad": "valences", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["兼", "兼"], "shortcut": " o /"}, {"glyph": "@", "name": "at", "kind": "dyadic-operator", "monad": "under", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["于", "於"], "shortcut": ""}, {"glyph": "∂", "name": "partial", "kind": "monadic-operator", "monad": "derivative", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["导梯", "導梯"], "shortcut": " f"}, {"glyph": "⍚", "name": "diamond-underbar", "kind": "dyadic-operator", "monad": "agenda", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["择", "擇"], "shortcut": " - `"}, {"glyph": "⌺", "name": "quad-diamond", "kind": "dyadic-operator", "monad": "stencil", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["邻", "鄰"], "shortcut": " q `"}, {"glyph": "/", "name": "slash", "kind": "monadic-operator", "monad": "reduce", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["总", "總"], "shortcut": ""}, {"glyph": "⌿", "name": "slash-bar", "kind": "monadic-operator", "monad": "reduce-first", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["汇", "匯"], "shortcut": " - /"}, {"glyph": "\\", "name": "backslash", "kind": "monadic-operator", "monad": "scan", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["累", "累"], "shortcut": ""}, {"glyph": "⍀", "name": "backslash-bar", "kind": "monadic-operator", "monad": "scan-first", "dyad": "", "monad_rank": "", "dyad_ranks": "", "hanzi": ["续", "續"], "shortcut": " - \\"}],{"alt_aliases": {"£": "#"}, "unshifted": {"*": "8", "~": "`", "_": "-", "|": "\\", ":": ";"}, "optional_shift": {"!": "1", "@": "2", "#": "3", "$": "4", "%": "5", "^": "6", "&": "7", "*": "8", "(": "9", "_": "-"}, "option": {"`": "⋄", "1": {"state": "diaeresis"}, "2": "⌽", "3": "√", "4": "⇄", "5": {"state": "subscript"}, "6": {"state": "superscript"}, "7": "∆", "8": "∞", "9": "∨", "0": "∧", ")": "⍬", "!": "¹", "@": "²", "#": "³", "$": "⁴", "%": "⁵", "^": "⁶", "&": "⁷", "*": "⁸", "(": "⁹", "_": "⁻", "-": {"state": "bar"}, "=": "≡", "q": {"state": "quad"}, "w": "⍵", "e": "∊", "r": "⍴", "t": "∘", "y": "•", "u": "÷", "i": "⍳", "o": {"state": "circle"}, "p": "π", "+": "≠", "\\": {"state": "stile"}, "a": "⍺", "s": "⌈", "d": "⌊", "f": "∂", "g": "∇", "h": "←", "j": "↓", "k": "↑", "K": "↕", "l": "↦", ";": "⊣", "'": "⊢", "z": "⊂", "x": "⊃", "c": "∩", "v": "∪", "b": "⊥", "n": "⊤", "m": "×", ",": "↢", ".": "↣", "<": "≤", ">": "≥", "/": "¿", "?": "≢"}, "states": {"diaeresis": {"terminator": "¨", "keys": {"t": "⍤", "o": "⍥", "*": "⍣", "~": "⍨", "g": "⍢", "8": "⍣", "`": "⍨"}}, "superscript": {"terminator": "^", "keys": {"0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": {"state": "superscript-minus"}, "b": "ᵇ", "t": "ᵀ", "u": "ᵘ"}}, "superscript-minus": {"terminator": "⁻", "keys": {"0": "⁻⁰", "1": "⁻¹", "2": "⁻²", "3": "⁻³", "4": "⁻⁴", "5": "⁻⁵", "6": "⁻⁶", "7": "⁻⁷", "8": "⁻⁸", "9": "⁻⁹"}}, "subscript": {"terminator": "_", "keys": {"0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉", "x": "ₓ", "j": "ⱼ", "e": "ₑ", "r": "ᵣ", "-": {"state": "subscript-minus"}}}, "subscript-minus": {"terminator": "₋", "keys": {"0": "₋₀", "1": "₋₁", "2": "₋₂", "3": "₋₃", "4": "₋₄", "5": "₋₅", "6": "₋₆", "7": "₋₇", "8": "₋₈", "9": "₋₉"}}, "bar": {"terminator": "¯", "keys": {",": "⍪", "\\": "⍀", "/": "⌿", "a": "⍶", "w": "⍹", "7": "⍙", "`": "⍚", "0": "⊼", "9": "⊽", "e": "⍷", "i": "⍸", "z": "⊆"}}, "quad": {"terminator": "⎕", "keys": {"t": "⌻", ":": "⍠", "=": "⌸", "u": "⌹", "|": "⌷", "`": "⌺", ";": "⍠", "\\": "⌷"}}, "circle": {"terminator": "○", "keys": {"-": "⊖", "\\": "⍉", "/": "⊘", "*": "⍟", "m": "⊗", "u": "⨸", "8": "⍟", "c": "⍝", "b": "⍎", "n": "⍕"}}, "stile": {"terminator": "⍭", "keys": {"7": "⍋", "g": "⍒"}}}},{"⍳": [{"label": "One input · zero-based indices", "code": "⍳4"}, {"label": "Two inputs · index of", "code": "\"abc\"⍳\"cabz\""}], "↦": [{"label": "One input · range from one", "code": "↦4"}, {"label": "Two inputs · inclusive range", "code": "0↦4"}], "=": [{"label": "One input · classify equal items", "code": "=4 7 4 9"}, {"label": "Two inputs · compare each item", "code": "1 2 3 = 1 9 3"}], "≠": [{"label": "One input · first occurrences", "code": "≠4 7 4 9"}, {"label": "Two inputs · not equal", "code": "1 2 3 ≠ 1 9 3"}], "≡": [{"label": "One input · nesting depth", "code": "≡1 2 3"}, {"label": "Two inputs · whole-array match", "code": "1 2 3 ≡ 1 2 3"}], "≢": [{"label": "One input · count items", "code": "≢2 4 9"}, {"label": "Two inputs · whole-array mismatch", "code": "1 2 3 ≢ 1 2"}], "⍴": [{"label": "One input · shape", "code": "⍴1 2 3"}, {"label": "Two inputs · reshape", "code": "2 3⍴⍳6"}], "×": [{"label": "One input · sign", "code": "×¯3 0 4"}, {"label": "Two inputs · multiply", "code": "3×1 2 3"}], "÷": [{"label": "One input · reciprocal", "code": "÷1 2 4"}, {"label": "Two inputs · divide", "code": "12÷3"}], "+": [{"label": "Two inputs · add", "code": "1 2 3 + 10"}], "-": [{"label": "One input · negate", "code": "-1 2 3"}, {"label": "Two inputs · subtract", "code": "10-3"}], "/": [{"label": "Reduce · sum a list", "code": "+/2 4 9"}, {"label": "Reduce · product", "code": "×/1 2 3 4"}], "\\": [{"label": "Scan · running sum", "code": "+\\1 2 3 4"}], "⌽": [{"label": "One input · reverse", "code": "⌽1 2 3"}, {"label": "Two inputs · rotate", "code": "1⌽1 2 3"}], "↑": [{"label": "One input · first", "code": "↑10 20 30"}, {"label": "Two inputs · take", "code": "2↑10 20 30"}], "↓": [{"label": "Two inputs · drop", "code": "1↓10 20 30"}], "⎕": [{"label": "Display a result", "code": "⎕←1 2 3"}], "⍟": [{"label": "One input · natural logarithm", "code": "⍟1 2 4"}, {"label": "Two inputs · logarithm base two", "code": "2⍟8"}], "√": [{"label": "One input · square root", "code": "√1 4 9"}, {"label": "Two inputs · cube root", "code": "3√27"}]});
};if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();
