document.addEventListener("DOMContentLoaded", () => {

    const catSelect = document.querySelector('.category-select select');
    if(catSelect){
        const catSelectChoices = new Choices(catSelect);
    }
    
   
    const statusSelect = document.querySelector('.status-select select');
    if(statusSelect){
        const statusSelectChoices = new Choices(statusSelect);
    }

    const searchSelect = document.querySelector('.search-select select');
    if(searchSelect){
        const searchSelectChoices = new Choices(searchSelect);
    }

    const categorySelect = document.querySelector('.category-select select');
    if(categorySelect){
        const categorySelectChoices = new Choices(categorySelect);
    }

    const addCategorySelect = document.querySelector('.category-add-select select');
    if(addCategorySelect){
        const addCategorySelectChoices = new Choices(addCategorySelect);
    }

    const subCategorySelect = document.querySelector('.sub-category-select select');
    if(subCategorySelect){
        const subCategorySelectChoices = new Choices(subCategorySelect);
    }

    const dateSelect = document.querySelector('.date-format-select select');
    if(dateSelect){
        const dateSelectChoices = new Choices(dateSelect);
    }

    const currencySelect = document.querySelector('.currency-format-select select');
    if(dateSelect){
        const currencySelectChoices = new Choices(currencySelect);
    }

    const genderSelect = document.querySelector('.profile-gender-select select');
    if(genderSelect){
        const genderSelectChoices = new Choices(genderSelect);
    }

    const ctx = document.getElementById('salesStatics');
    if(ctx){
        var charts = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                    label: 'Sales',
                    tension: 0.3,
                    fill: true,
                    backgroundColor: 'rgba(62, 151, 255, 0.2)',
                    borderColor: 'rgba(62, 151, 255)',
                    data: [20, 17, 15, 21, 24, 35, 37, 30, 20, 27, 25, 12]
                },
                {
                    label: 'Visitors',
                    tension: 0.3,
                    fill: true,
                    backgroundColor: 'rgba(80, 205, 137, 0.2)',
                    borderColor: 'rgb(80, 205, 137)',
                    data: [30, 12, 22, 30, 35, 37, 35, 25, 39, 30, 33, 32]
                },
                {
                    label: 'Products',
                    tension: 0.3,
                    fill: true,
                    backgroundColor: 'rgba(255, 152, 0, 0.2)',
                    borderColor: 'rgb(255, 152, 0)',
                    data: [40, 25, 22, 24, 27, 20, 24, 15, 29, 20, 32, 11]
                }

            ]
        },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                        },
                    }
                }
            }
        });
    }

    const earnMonth = document.getElementById('earningMonth');
    if(earnMonth){
        var earn = new Chart(earnMonth, { 
            type: 'doughnut',
            data: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                  ],
                  datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                      'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                        },
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }

    const earnMonthly = document.getElementById('earningStatics');

    if(earnMonthly){
        var myChart = new Chart(earnMonthly, {
        type: 'pie',
        data: {
            labels: ['Grocery', 'Men', 'Women', 'Kids'],
            datasets: [{
            label: 'Sales Count',
            data: 
                [7, 5, 15, 10],
                backgroundColor: [
                    '#50CD89',
                    '#F1416C',
                    '#3E97FF',
                    '#ff9800'
                ],
                borderColor: [
                    '#50CD89',
                    '#F1416C',
                    '#3E97FF',
                    '#ff9800'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
    
        }
    });
    }

    const quillss = document.getElementById('editor');
    if(quillss){
        var quill = new Quill('#editor', {
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline'],
              ['image', 'code-block']
            ]
          },
          placeholder: 'Compose an epic...',
          theme: 'snow'  // or 'bubble'
        });

    }


    const ragneSlider = document.getElementById('my-slider');

    if(ragneSlider){
        // THIS IS THE RANGE SLIDER LOGIC DO NOT CHANGE !!
        var ZBRangeSlider = function(id) { 
            var self = this;
            var startX = 0, x = 0;
          
            // retrieve touch button
            var slider     = document.getElementById(id)
            var touchLeft  = slider.querySelector('.slider-touch-left');
            var touchRight = slider.querySelector('.slider-touch-right');
            var lineSpan   = slider.querySelector('.slider-line span');
            
            // get some properties
            var min   = parseFloat(slider.getAttribute('data-se-min'));
            var max   = parseFloat(slider.getAttribute('data-se-max'));
            
            // retrieve default values
            var defaultMinValue = min;
            if(slider.hasAttribute('data-se-min-value'))
            {
              defaultMinValue = parseFloat(slider.getAttribute('data-se-min-value'));  
            }
            var defaultMaxValue = max;
            
            if(slider.hasAttribute('data-se-max-value'))
            {
              defaultMaxValue = parseFloat(slider.getAttribute('data-se-max-value'));  
            }
            
            // check values are correct
            if(defaultMinValue < min)
            {
              defaultMinValue = min;
            }
            
            if(defaultMaxValue > max)
            {
              defaultMaxValue = max;
            }
            
            if(defaultMinValue > defaultMaxValue)
            {
              defaultMinValue = defaultMaxValue;
            }
            
            var step  = 0.0;
            
            if (slider.getAttribute('data-se-step'))
            {
              step  = Math.abs(parseFloat(slider.getAttribute('data-se-step')));
            }
            
            // normalize flag
            var normalizeFact = 26;
            
            self.slider = slider;
            self.reset = function() {
              touchLeft.style.left = '0px';
              touchRight.style.left = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
              lineSpan.style.marginLeft = '0px';
              lineSpan.style.width = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
              startX = 0;
              x = 0;
            };
            
            self.setMinValue = function(minValue)
            {
              var ratio = ((minValue - min) / (max - min));
              touchLeft.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact))) + 'px';
              lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
              lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
              slider.setAttribute('data-se-min-value', minValue);
            }
            
            self.setMaxValue = function(maxValue)
            {
              var ratio = ((maxValue - min) / (max - min));
              touchRight.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact)) + normalizeFact) + 'px';
              lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
              lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
              slider.setAttribute('data-se-max-value', maxValue);
            }
            
            // initial reset
            self.reset();
            
            // usefull values, min, max, normalize fact is the width of both touch buttons
            var maxX = slider.offsetWidth - touchRight.offsetWidth;
            var selectedTouch = null;
            var initialValue = (lineSpan.offsetWidth - normalizeFact);
          
            // set defualt values
            self.setMinValue(defaultMinValue);
            self.setMaxValue(defaultMaxValue);
            
            // setup touch/click events
            function onStart(event) {
              
              // Prevent default dragging of selected content
              event.preventDefault();
              var eventTouch = event;
          
              if (event.touches)
              {
                eventTouch = event.touches[0];
              }
              
              if(this === touchLeft)
              {
                x = touchLeft.offsetLeft;
              }
              else
              {
                x = touchRight.offsetLeft;
              }
          
              startX = eventTouch.pageX - x;
              selectedTouch = this;
              document.addEventListener('mousemove', onMove);
              document.addEventListener('mouseup', onStop);
              document.addEventListener('touchmove', onMove);
              document.addEventListener('touchend', onStop);
              
          
            }
            
            function onMove(event) {
              var eventTouch = event;
          
              if (event.touches)
              {
                eventTouch = event.touches[0];
              }
          
              x = eventTouch.pageX - startX;
              
              if (selectedTouch === touchLeft)
              {
                if(x > (touchRight.offsetLeft - selectedTouch.offsetWidth + 10))
                {
                  x = (touchRight.offsetLeft - selectedTouch.offsetWidth + 10)
                }
                else if(x < 0)
                {
                  x = 0;
                }
                
                selectedTouch.style.left = x + 'px';
              }
              else if (selectedTouch === touchRight)
              {
                if(x < (touchLeft.offsetLeft + touchLeft.offsetWidth - 10))
                {
                  x = (touchLeft.offsetLeft + touchLeft.offsetWidth - 10)
                }
                else if(x > maxX)
                {
                  x = maxX;
                }
                selectedTouch.style.left = x + 'px';
              }
              
              // update line span
              lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
              lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
              
              // write new value
              calculateValue();
              
              // call on change
              if(slider.getAttribute('on-change'))
              {
                var fn = new Function('min, max', slider.getAttribute('on-change'));
                fn(slider.getAttribute('data-se-min-value'), slider.getAttribute('data-se-max-value'));
              }
              
              if(self.onChange)
              {
                self.onChange(slider.getAttribute('data-se-min-value'), slider.getAttribute('data-se-max-value'));
              }
              
            }
            
            function onStop(event) {
              document.removeEventListener('mousemove', onMove);
              document.removeEventListener('mouseup', onStop);
              document.removeEventListener('touchmove', onMove);
              document.removeEventListener('touchend', onStop);
              
              selectedTouch = null;
          
              // write new value
              calculateValue();
              
                // call did changed
                if(slider.getAttribute('did-changed'))
                {
                    var fn = new Function('min, max', slider.getAttribute('did-changed'));
                    fn(slider.getAttribute('data-se-min-value'), slider.getAttribute('data-se-max-value'));
                }
                
                if(self.didChanged)
                    {
                        self.didChanged(slider.getAttribute('data-se-min-value'), slider.getAttribute('data-se-max-value'));
                    }
                }
            
                function calculateValue() {
                var newValue = (lineSpan.offsetWidth - normalizeFact) / initialValue;
                var minValue = lineSpan.offsetLeft / initialValue;
                var maxValue = minValue + newValue;
            
                var minValue = minValue * (max - min) + min;
                var maxValue = maxValue * (max - min) + min;
                
                console.log(step);
                if (step !== 0.0)
                {
                    var multi = Math.floor((minValue / step));
                    minValue = step * multi;
                    
                    multi = Math.floor((maxValue / step));
                    maxValue = step * multi;
                }
                
                slider.setAttribute('data-se-min-value', minValue);
                slider.setAttribute('data-se-max-value', maxValue);
                }
                
                // link events
                touchLeft.addEventListener('mousedown', onStart);
                touchRight.addEventListener('mousedown', onStart);
                touchLeft.addEventListener('touchstart', onStart);
                touchRight.addEventListener('touchstart', onStart);
            };
            
            // -------------------
            // How to use? 
            var newRangeSlider = new ZBRangeSlider('my-slider');
            
            newRangeSlider.onChange = function(min, max)
            {
                console.log(min, max, this);
                document.getElementById('result').innerHTML = 'Min: ' + min + ' Max: ' + max;
            }
            
            newRangeSlider.didChanged = function(min, max)
            {
                console.log(min,max, this);
                document.getElementById('result').innerHTML = 'Min: ' + min + ' Max: ' + max;
            }

    }

    const tagsss = document.getElementById('tag-input1');
    if(tagsss){

            // Plugin Constructor
            var TagsInput = function(opts){
            this.options = Object.assign(TagsInput.defaults , opts);
            this.init();
        }
        
        // Initialize the plugin
        TagsInput.prototype.init = function(opts){
            this.options = opts ? Object.assign(this.options, opts) : this.options;
        
            if(this.initialized)
                this.destroy();
                
            if(!(this.orignal_input = document.getElementById(this.options.selector)) ){
                console.error("tags-input couldn't find an element with the specified ID");
                return this;
            }
        
            this.arr = [];
            this.wrapper = document.createElement('div');
            this.input = document.createElement('input');
            init(this);
            initEvents(this);
        
            this.initialized =  true;
            return this;
        }
        
        // Add Tags
        TagsInput.prototype.addTag = function(string){
        
            if(this.anyErrors(string))
                return ;
        
            this.arr.push(string);
            var tagInput = this;
        
            var tag = document.createElement('span');
            tag.className = this.options.tagClass;
            tag.innerText = string;
        
            var closeIcon = document.createElement('b');
            closeIcon.innerHTML = '&times;';
            
            // delete the tag when icon is clicked
            closeIcon.addEventListener('click' , function(e){
                e.preventDefault();
                var tag = this.parentNode;
        
                for(var i =0 ;i < tagInput.wrapper.childNodes.length ; i++){
                    if(tagInput.wrapper.childNodes[i] == tag)
                        tagInput.deleteTag(tag , i);
                }
            })
        
        
            tag.appendChild(closeIcon);
            this.wrapper.insertBefore(tag , this.input);
            this.orignal_input.value = this.arr.join(',');
        
            return this;
        }
        
        // Delete Tags
        TagsInput.prototype.deleteTag = function(tag , i){
            tag.remove();
            this.arr.splice( i , 1);
            this.orignal_input.value =  this.arr.join(',');
            return this;
        }
        
        // Make sure input string have no error with the plugin
        TagsInput.prototype.anyErrors = function(string){
            if( this.options.max != null && this.arr.length >= this.options.max ){
                console.log('max tags limit reached');
                return true;
            }
            
            if(!this.options.duplicate && this.arr.indexOf(string) != -1 ){
                console.log('duplicate found " '+string+' " ')
                return true;
            }
        
            return false;
        }
        
        // Add tags programmatically 
        TagsInput.prototype.addData = function(array){
            var plugin = this;
            
            array.forEach(function(string){
                plugin.addTag(string);
            })
            return this;
        }
        
        // Get the Input String
        TagsInput.prototype.getInputString = function(){
            return this.arr.join(',');
        }
        
        
        // destroy the plugin
        TagsInput.prototype.destroy = function(){
            this.orignal_input.removeAttribute('hidden');
        
            delete this.orignal_input;
            var self = this;
            
            Object.keys(this).forEach(function(key){
                if(self[key] instanceof HTMLElement)
                    self[key].remove();
                
                if(key != 'options')
                    delete self[key];
            });
        
            this.initialized = false;
        }
        
        // Private function to initialize the tag input plugin
        function init(tags){
            tags.wrapper.append(tags.input);
            tags.wrapper.classList.add(tags.options.wrapperClass);
            tags.orignal_input.setAttribute('hidden' , 'true');
            tags.orignal_input.parentNode.insertBefore(tags.wrapper , tags.orignal_input);
        }
        
        // initialize the Events
        function initEvents(tags){
            tags.wrapper.addEventListener('click' ,function(){
                tags.input.focus();           
            });
            
        
            tags.input.addEventListener('keydown' , function(e){
                var str = tags.input.value.trim(); 
        
                if( !!(~[9 , 13 , 188].indexOf( e.keyCode ))  )
                {
                    e.preventDefault();
                    tags.input.value = "";
                    if(str != "")
                        tags.addTag(str);
                }
        
            });
        }
        
        
        // Set All the Default Values
        TagsInput.defaults = {
            selector : '',
            wrapperClass : 'tags-input-wrapper',
            tagClass : 'tag',
            max : null,
            duplicate: false
        }
        
        window.TagsInput = TagsInput;
        
        var tagInput1 = new TagsInput({
            selector: 'tag-input1',
            duplicate : false,
            max : 50
        });
        tagInput1.addData(['PHP' , 'JavaScript' , 'CSS'])
    }

    const rangeSlider2 = document.getElementById('example_id');
    if(rangeSlider2){
    
        ionRangeSlider('#example_id', {
            min: 0,
            max: 100,
            prefix: "%",
            step: 1,
        });

    }



    const offcanvasOpenBtn = document.querySelectorAll('.offcanvas-open-btn');
    const offcanvasCloseBtn = document.querySelectorAll('.offcanvas-close-btn');
    const offcanvas = document.querySelector('.offcanvas-area');
    const bodyOverlay = document.querySelector('.body-overlay');


    if(offcanvasOpenBtn && offcanvasCloseBtn && offcanvas && bodyOverlay){
        
            offcanvasOpenBtn.forEach((e)=>{
                e.addEventListener('click', function(e){
                    offcanvas.classList.add('offcanvas-opened');
                    bodyOverlay.classList.add('opened');
                });
            });
            
        
            offcanvasCloseBtn.forEach((e)=>{
                e.addEventListener('click', function(e){
                    offcanvas.classList.remove('offcanvas-opened');
                    bodyOverlay.classList.remove('opened');
                });
            });
                
            bodyOverlay.addEventListener('click', function(e){
                offcanvas.classList.remove('offcanvas-opened');
                bodyOverlay.classList.remove('opened');
            });

    }

    var linkToggle = document.querySelectorAll('.tpSlideDownBtn');

    for(i = 0; i < linkToggle.length; i++){
    
      linkToggle[i].addEventListener('click', function(event){
    
        event.target.classList.add('active');
        event.preventDefault();
        var container = document.getElementById(this.dataset.container);
    
        if (!container.classList.contains('active')) {
          
          container.classList.add('active');
          container.style.height = 'auto';
    
          var height = container.clientHeight + 'px';
    
          container.style.height = '0px';
    
          setTimeout(function () {
            container.style.height = height;
          }, 0);
          
        } else {
          
          container.style.height = '0px';
          event.target.classList.remove('active');

          container.addEventListener('transitionend', function () {
            container.classList.remove('active');
          }, {
            once: true
          });
        }
        
      });
    }

    const demo = document.querySelector('.overflow-item');

    if(demo){
        const ps = new PerfectScrollbar(demo);
    }



    const demo2 = document.querySelector('.sidebar-scrollbar');
    if(demo2){
        const ps2 = new PerfectScrollbar(demo2);
    }



    const dataWiidth = document.querySelectorAll('.data-width');
    let width = null;

    dataWiidth.forEach(e => {
        width = e.getAttribute("data-width");
        e.style.width = width;
    });


    const dataBGImage = document.querySelectorAll('.data-bg');
    let bgImage = null;

    dataBGImage.forEach(e => {
        bgImage = e.getAttribute("data-bg");
        e.style.backgroundImage  = "url(' "+ bgImage +"')";
    });
    
});



