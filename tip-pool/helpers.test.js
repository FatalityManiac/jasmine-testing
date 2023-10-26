describe("Utilities test", function() {
    beforeEach(function () {
      billAmtInput.value = 200;
      tipAmtInput.value = 60;
      submitPaymentInfo();
    });

    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
        billAmtInput.value = 400;
        tipAmtInput.value = 120;
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipAmt')).toEqual(180);
      });
    
      it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(200);
        billAmtInput.value = 400;
        tipAmtInput.value = 120;
        submitPaymentInfo();
    
        expect(sumPaymentTotal('billAmt')).toEqual(600);
      });

      it('should sum total tip percent on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(30);
    
        billAmtInput.value = 200;
        tipAmtInput.value = 60;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipPercent')).toEqual(60);
      });
    
      it('should sum tip percent of a single tip on calculateTipPercent()', function () {
        expect(calculateTipPercent(100, 23)).toEqual(23);
        expect(calculateTipPercent(111, 11)).toEqual(10);
      });

      it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      });
    
      it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
      });
    
      afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });
    });