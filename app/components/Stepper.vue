<template>
    <div class="stepper__container">
      <div class="stepper">
        <div class="step active">
          <div class="step-inner">
            <div class="step-circle"><span>1</span></div>
          </div>
        </div>
        <div class="step">
          <div class="step-inner">
            <div class="step-circle"><span>2</span></div>
          </div>
        </div>
        <div class="step">
          <div class="step-inner">
            <div class="step-circle"><span>3</span></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>


<style>

.stepper__container {
  width: 80%;
  margin: 0 auto
}

.stepper {
  font-size:0.6em;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.step {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
}
.step:after {
  content: '';
  display: block;
  width: 100%;
  position: relative;
  height: 3px;
  top: -5px;
  background-color: #ffcb9b;
}
.step:before {
  content: '';
  display: block;
  width: 100%;
  position: relative;
  height: 3px;
  top: -5px;
  background-color: #ffcb9b;
}
.step:last-child {
  flex-basis: 70%;
}
.step:last-child:after {
  display: none;
}
.step:first-child {
  flex-basis: 70%;
}
.step:first-child:before {
  display: none;
}

.active {
  color: white;
  font-weight: bold;
}
.active:before, .active:after {
  background-color: #FF9A02;
}
.active + .step:not(.active):before {
  background-color: #FF9A02;
}

.step-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.active .step-circle {
  background-color: #FF9A02;
}

.step-circle {
  height: 30px;
  width: 30px;
  border-radius: 20px;
  background-color: #ffcb9b;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
