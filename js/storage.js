/* Camada de persistência do LETTERFORM */
const Store = (() => {
  const KEY = "letterform-data-v1";
  const defaults = { profile:{name:"Visitante"}, letters:[], settings:{theme:"light",dateFormat:"dd/mm/yyyy"} };
  function load(){
    try { const raw=localStorage.getItem(KEY); return raw ? {...defaults,...JSON.parse(raw)} : structuredClone(defaults); }
    catch(error){ console.error("Não foi possível ler os dados:",error); return structuredClone(defaults); }
  }
  let data=load();
  function save(){
    try { localStorage.setItem(KEY,JSON.stringify(data)); return true; }
    catch(error){ console.error(error); return false; }
  }
  function all(){ return data.letters; }
  function get(id){ return data.letters.find(x=>x.id===id); }
  function upsert(letter){
    const index=data.letters.findIndex(x=>x.id===letter.id);
    letter.updatedAt=new Date().toISOString();
    if(index>=0) data.letters[index]=letter; else data.letters.unshift(letter);
    return save();
  }
  function remove(id){ data.letters=data.letters.filter(x=>x.id!==id); return save(); }
  function profile(){return data.profile;}
  function setName(name){data.profile.name=name.trim()||"Visitante";return save();}
  function settings(){return data.settings;}
  function setSettings(s){data.settings={...data.settings,...s};return save();}
  function exportBackup(){return JSON.stringify(data,null,2);}
  function importBackup(obj){
    if(!obj || !Array.isArray(obj.letters)) throw new Error("Arquivo de backup inválido.");
    data={...defaults,...obj,letters:obj.letters};
    return save();
  }
  function importLetter(letter){
    if(!letter || typeof letter.title!=="string" || typeof letter.content!=="string") throw new Error("Carta inválida.");
    const copy={...letter,id:uid(),status:"received",receivedAt:new Date().toISOString(),isFavorite:false};
    data.letters.unshift(copy); return save();
  }
  function uid(){return "letter_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8);}
  return {all,get,upsert,remove,profile,setName,settings,setSettings,exportBackup,importBackup,importLetter,uid,save};
})();
