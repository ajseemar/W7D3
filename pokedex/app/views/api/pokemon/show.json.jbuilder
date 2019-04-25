json.pokemon do
  json.partial! 'api/pokemon/poke', poke: @poke
end

json.items do
  @poke.items.each do |item|
    json.set! item.id do
      json.partial! 'api/items/item', item: item
    end
  end
end