document.addEventListener('DOMContentLoaded', function() {
  var addVariantBtn = document.getElementById('add-variant');
  var variantsContainer = document.querySelector('.variants-container');

  // Function to create a new variant element
  function createVariantElement() {
    var wrapper = document.createElement('div');
    wrapper.className = 'inputs variant';

    wrapper.innerHTML = ''
      + '<div class="image_inputs">'
      + '  <p>Variant</p>'
      + '  <button type="button" class="image-btn">+<br>image</button>'
      + '</div>'
      + '<div class="base_inputs">'
      + '  <label>Variant Name</label>'
      + '  <input type="text" name="variant_name[]">'
      + '  <label>Color</label>'
      + '  <textarea name="variant_description[]" rows="1"></textarea>'
      + '  <div class="size-section">'
      + '    <label>Sizes for this variant:</label>'
      + '    <div class="size-list chips-container">'
      + '      <div class="size-chip">'
      + '        <input type="text" name="sizes[]" placeholder="Enter size">'
      + '        <button type="button" class="remove-size">x</button>'
      + '      </div>'
      + '    </div>'
      + '    <button type="button" class="add-size">+ Add Size</button>'
      + '  </div>'
      + '  <label>Variant Category</label>'
      + '  <input type="text" name="variant_category[]">'
      + '  <label>Variant Price</label>'
      + '  <input type="text" name="variant_price[]">'
      + '  <label>Variant Stock</label>'
      + '  <input type="text" name="variant_stock[]">'
      + '  <br>'
      + '  <button type="button" class="remove-variant">Remove variant</button>'
      + '</div>';

    return wrapper;
  }

  // Add new variant
  addVariantBtn.addEventListener('click', function() {
    variantsContainer.appendChild(createVariantElement());
  });

  // Event delegation
  variantsContainer.addEventListener('click', function(e) {
    var target = e.target;

    // Remove variant
    if (target.classList.contains('remove-variant')) {
      var variantEl = target.closest('.variant');
      if (variantEl) variantEl.remove();
    }

    // Add new size chip
    if (target.classList.contains('add-size')) {
      var sizeList = target.previousElementSibling; // .chips-container
      var chip = document.createElement('div');
      chip.className = 'size-chip';
      chip.innerHTML = ''
        + '<input type="text" name="sizes[]" placeholder="Enter size">'
        + '<button type="button" class="remove-size">x</button>';
      sizeList.appendChild(chip);
    }

    // Remove individual size chip
    if (target.classList.contains('remove-size')) {
      var chip = target.closest('.size-chip');
      if (chip) chip.remove();
    }
  });
});