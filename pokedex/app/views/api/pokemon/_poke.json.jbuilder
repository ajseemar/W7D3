json.extract! poke, :id, :name, :attack, :defense, :poke_type, :moves
json.image_url asset_path(poke.image_url)
json.item_ids poke.items.map { |item| item.id }