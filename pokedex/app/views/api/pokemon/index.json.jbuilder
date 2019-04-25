@pokemon.each do |poke|
  json.set! poke.id do
    json.partial! 'api/pokemon/poke', poke: poke
  end
end