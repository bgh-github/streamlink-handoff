const options = ["player", "playerArgs", "quality"];

function restoreOptions()
{
  options.forEach(optionKey => 
    {
      browser.storage.local.get(optionKey)
        .then(storageItem =>
        {
          if (storageItem[optionKey]){document.querySelector("#"+optionKey).value = storageItem[optionKey]};
        })
    });
};

function saveOptions(event)
{
  event.preventDefault();
  
  options.forEach(optionKey =>
    {
      let optionValue = document.querySelector("#"+optionKey).value;
      
      if (optionValue)
      {
        browser.storage.local.set({[optionKey]: optionValue});
      }
      else
      {
        browser.storage.local.remove(optionKey);
      }
    });
};

function resetOptions(event)
{
  let proceed = confirm("Reset extension preferences to default?");

  if (proceed)
  {
    browser.storage.local.clear();
  }
  else
  {
    event.preventDefault();
  }
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
document.querySelector("form").addEventListener("reset", resetOptions);