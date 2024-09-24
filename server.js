import express from "express"
import { PrismaClient } from "@prisma/client";
import cors from 'cors';


const prisma = new PrismaClient();

const app = express()
app.use(express.json())
app.use(cors())

//Criação de departamento
app.post('/departamentos/', async (req, res) => {
    try {
        const departamento = await prisma.departamentos.create({
            data: {
                nome: req.body.nome
            }
        }) 
        res.status(201).json(departamento);
        
    } catch (err) {

        res.status(500).json({message:"Erro ao criar departamento", error: err.message})
        
    }
    
})


app.get('/departamentos/', async (req, res) => {

    try {
        const departamento  = await prisma.departamentos.findMany()

        res.status(200).json(departamento);
        
    } catch (err) {
        res.status(500).json({message:"Erro ao exibir departamentos", error: err.message})
    }
    
    
})

app.put('/departamentos/:id', async (req, res) => {

    try {
        const departamento = await prisma.departamentos.update({

            where: {
                id: req.params.id,
            },
            data: {
                nome:  req.body.nome
            }
        }) 
           
        res.status(201).json(departamento)
        
        
    } catch (err) {
        res.status(500).json({message:"Erro ao modificar departamento", error: err.message})
        
    }
   
})

app.delete('/departamentos/:id', async (req, res) => {
    try {
        const departamento = await prisma.departamentos.delete({
            where: {
                id: req.params.id,
            }
        }) 
        
        res.status(200).json({message: 'Departamento deletado sucesso'});
    }catch(err) {
        res.status(500).json({message:"Erro ao deletar departamento", error: err.message});
    }
})

//Criação de colaboradores

app.post('/colaborador', async (req, res) => {

    try {
        const colaborador = await prisma.colaborador.create({
            data: {
                nome: req.body.nome,
                email: req.body.email,
                departamento: {
                    connect: {id: req.body.departamentoId}
                }
            }
        }) 
        res.status(201).json(colaborador);
    }catch(err) {
        res.status(500).json({message: "Erro ao criar colaborador", error: err.message});
    }

})

app.put('/colaborador/:id', async (req, res) => {
    try {
        const colaborador = await prisma.colaborador.update({
            where: {
                id: req.params.id,
            },
            data: {
                email: req.body.email,
                name: req.body.nome
            }
        }) 
        res.status(201).json(colaborador);
    }catch(error) {
        res.status(500).json({message: "Erro ao modificar colaborador", error: err.message});
    }

})

app.delete('/colaborador/:id', async (req, res) => {
    try {
        await prisma.colaborador.delete({
            where: {
                id: req.params.id,
            }
            
        }) 
        res.status(200).json({message: 'Colaborador deletado como sucesso'})
    }catch(err) {
        res.status(500).json({message: "Erro ao deletar colaborador", error: err.message})
    }
    
    
})
app.listen(300, () => console.log("Servidor rodando"));



