using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularArchitecture.ViewModels
{
    public class ResponseViewModel
    {
        private bool _success;
        private string _successMessage;
        private List<ErrorViewModel> _responseError;

        public ResponseViewModel()
        {
            _success = true;
            _responseError = new List<ErrorViewModel>();
        }

        public bool Success { get { return _success; } }

        public string SuccessMessage { get { return _successMessage; } set { _successMessage = value; } }
        
        public object Data { get; set; }
        
        public List<ErrorViewModel> Errors { get { return _responseError; } }
        
        public void AddError(string tag, string type, string message) 
        {
            _success = false; 
            _responseError.Add(new ErrorViewModel() {Tag = tag, Type = type, Message = message });
        }

        public void AddError(string tag, string message)
        {
            _success = false;
            _responseError.Add(new ErrorViewModel() { Tag = tag, Type = "type", Message = message });
        }

        public void AddError(string message)
        {
            _success = false;
            _responseError.Add(new ErrorViewModel() { Tag = "ALL", Type = "type", Message = message });
        }

    }

    public class ErrorViewModel
    {
        public string Tag { get; set; }
        public string Type { get; set; }
        public string Message { get; set; }
    }

}