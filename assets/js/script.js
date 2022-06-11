/* UICompoenet */
var UIComponent = UIComponent || {};
UIComponent.Event = {
	"popupOpen":new CustomEvent("popupOpen"),
	"popupClose":new CustomEvent("popupClose"),
}

UIComponent.Popup = function(props){
  var _self = this;
  var _target = null;
  var _container = null;
  var _popupDimmend = null;

  function init(){
    setEvent();
    setButtons();
  }

  function setEvent(){
    _target = props['target'];
    _container = _target;

    _container.addEventListener('popupOpen',function(){
      console.log("ddd");
      this.classList.add("show");
      createDimmed();
    });
    
    _container.addEventListener('popupClose',function(){
      this.classList.remove("show");
    });
  }

  function setButtons(){
    var closeBtn = _container.querySelector('.btn-popup-cancel');
    var confirmBtn = _container.querySelector('.btn-popup-confirm');

    if(closeBtn){
      closeBtn.addEventListener('click',function(){
        _self.close();
      },false);
    }

    if(confirmBtn){
      confirmBtn.addEventListener('click',function(){
        _self.close();
      },false);
    }
  }

  function createDimmed(){
    _popupDimmend = document.createElement('div'); 
    _popupDimmend.className = 'dimmed';
    _target.appendChild(_popupDimmend);
  }

  this.open = function() {
    _container.style.display = 'block';
    _target.dispatchEvent(UIComponent.Event.popupOpen);
  }

  this.close = function(){
    _container.style.display = 'none';
    _target.dispatchEvent(UIComponent.Event.popupClose);
  }

  init();
}


